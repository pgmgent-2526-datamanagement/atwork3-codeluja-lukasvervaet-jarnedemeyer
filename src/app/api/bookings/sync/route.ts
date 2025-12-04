import { parseBookings } from "@/lib/bookings/bookingParser";
import { transformBookings } from "@/lib/bookings/bookingTransformer";
import { readSheet } from "@/lib/googleSheets";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function POST() {
  try {
    const rawData = await readSheet("Gent_KPI", "A1:Z26");

    if (!Array.isArray(rawData) || rawData.length === 0) {
      return Response.json({ error: "No data found" }, { status: 404 });
    }

    const parsedBookings = parseBookings(rawData);
    const transformedBookings = transformBookings(parsedBookings);
    const bookingsToInsert = transformedBookings.slice(0, 20);

    await prisma.booking.deleteMany(); // Clear test data

    const result = await prisma.booking.createMany({
      data: bookingsToInsert,
    });

    return Response.json({
      success: true,
      parsed: parsedBookings.length,
      transformed: transformedBookings.length,
      inserted: result.count,
      cancelledCount: parsedBookings.filter((b) => b.status === "Cancelled")
        .length,
    });
  } catch (error) {
    return Response.json(
      {
        error: "Failed to sync",
        details: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
