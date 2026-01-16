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

    // Get all existing bookings that have host assignments
    const assignedBookings = await prisma.booking.findMany({
      where: {
        bookingHosts: {
          some: {}, // Has at least one host assigned
        },
      },
      select: {
        id: true,
      },
    });

    const assignedBookingIds = assignedBookings.map((b) => b.id);

    // Delete ONLY bookings that have NO host assignments
    const deleteResult = await prisma.booking.deleteMany({
      where: {
        id: {
          notIn: assignedBookingIds,
        },
      },
    });

    // Insert all new bookings from the sheet
    const insertResult = await prisma.booking.createMany({
      data: transformedBookings,
      skipDuplicates: true,
    });

    return new Response(
      JSON.stringify({
        success: true,
        parsed: parsedBookings.length,
        deleted: deleteResult.count,
        inserted: insertResult.count,
        preserved: assignedBookingIds.length,
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
