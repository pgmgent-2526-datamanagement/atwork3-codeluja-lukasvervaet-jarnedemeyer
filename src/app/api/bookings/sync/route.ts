import { parseBookings } from "@/lib/bookings/bookingParser";
import { transformBookings } from "@/lib/bookings/bookingTransformer";
import { readSheet } from "@/lib/googleSheets";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function syncBookings(): Promise<Response> {
  try {
    const rawData = await readSheet("Gent_KPI", "A:Z201");

    if (!Array.isArray(rawData) || rawData.length === 0) {
      return new Response(JSON.stringify({ error: "No data found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const parsedBookings = parseBookings(rawData);
    const transformedBookings = transformBookings(parsedBookings);
    const bookingsToInsert = transformedBookings;

    // Delete related records first to avoid foreign key constraint violations
    await prisma.bookingHost.deleteMany();
    await prisma.booking.deleteMany(); // Clear test data

    const result = await prisma.booking.createMany({
      data: bookingsToInsert,
    });

    return new Response(
      JSON.stringify({
        success: true,
        parsed: parsedBookings.length,
        transformed: transformedBookings.length,
        inserted: result.count,
        cancelledCount: parsedBookings.filter((b) => b.status === "Cancelled")
          .length,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Sync error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to sync",
        details: error instanceof Error ? error.message : "Unknown",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  return await syncBookings();
}

export async function POST() {
  return await syncBookings();
}
