import { parseBookings } from "@/lib/bookings/bookingParser";
import { transformBookings } from "@/lib/bookings/bookingTransformer";
import { readSheet } from "@/lib/googleSheets";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function syncBookings(daysAgo = 7, daysFuture = 14): Promise<Response> {
  try {
    // Calculate date range based on provided parameters
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - daysAgo);

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + daysFuture);

    const totalDays = daysAgo + daysFuture;

    // Delete bookings outside the specified window
    const deleteOldResult = await prisma.booking.deleteMany({
      where: {
        OR: [
          { bookingDate: { lt: startDate } },
          { bookingDate: { gt: endDate } },
        ],
      },
    });
    console.log(
      `Deleted bookings outside ${totalDays}-day window:`,
      deleteOldResult.count,
    );

    const rawData = await readSheet("Gent_KPI", "A:Z201");

    if (!Array.isArray(rawData) || rawData.length === 0) {
      return new Response(JSON.stringify({ error: "No data found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const parsedBookings = parseBookings(rawData);
    const transformedBookings = transformBookings(parsedBookings);

    // Filter bookings to only include those within the specified window
    const filteredBookings = transformedBookings.filter((booking) => {
      const bookingDate = new Date(booking.bookingDate);
      return bookingDate >= startDate && bookingDate <= endDate;
    });

    console.log(
      `Filtered to ${filteredBookings.length} bookings within ${totalDays}-day window (from ${parsedBookings.length} total)`,
    );

    // Track results
    let insertedCount = 0;
    let updatedCount = 0;
    let skippedCount = 0;

    // Upsert each booking using the externalId
    for (const booking of filteredBookings) {
      try {
        const result = await prisma.booking.upsert({
          where: {
            externalId: booking.externalId,
          },
          update: {
            venue: booking.venue,
            dayOfWeek: booking.dayOfWeek,
            startTime: booking.startTime,
            endTime: booking.endTime,
            bookingDate: booking.bookingDate,
            playersCount: booking.playersCount,
            hostsRequired: booking.hostsRequired,
            food_required: booking.food_required,
            is_b2b: booking.is_b2b,
            status: booking.status,
            packageName: booking.packageName,
            eposFamily: booking.eposFamily,
            bookingDescription: booking.bookingDescription,
            notes: booking.notes,
          },
          create: booking,
        });

        // Check if it was an insert or update by comparing timestamps
        if (result.createdAt.getTime() === result.updatedAt.getTime()) {
          insertedCount++;
        } else {
          updatedCount++;
        }
      } catch (error) {
        console.error(`Failed to upsert booking ${booking.externalId}:`, error);
        skippedCount++;
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        parsed: parsedBookings.length,
        filtered: filteredBookings.length,
        inserted: insertedCount,
        updated: updatedCount,
        skipped: skippedCount,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
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
      },
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const daysAgo = parseInt(searchParams.get("daysAgo") || "7");
  const daysFuture = parseInt(searchParams.get("daysFuture") || "14");

  return await syncBookings(daysAgo, daysFuture);
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const daysAgo = parseInt(searchParams.get("daysAgo") || "7");
  const daysFuture = parseInt(searchParams.get("daysFuture") || "14");

  return await syncBookings(daysAgo, daysFuture);
}
