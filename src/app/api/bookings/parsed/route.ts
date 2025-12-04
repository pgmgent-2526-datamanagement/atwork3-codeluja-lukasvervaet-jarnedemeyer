import { parseBookings } from "@/lib/bookings/bookingParser";
import { readSheet } from "@/lib/googleSheets";

export async function GET() {
  try {
    const rawData = await readSheet("Gent_KPI", "A1:Z26");

    if (!Array.isArray(rawData) || rawData.length === 0) {
      return Response.json(
        { error: "No data found in the specified sheet range." },
        { status: 404 }
      );
    }
    const parsedBookings = parseBookings(rawData);

    return Response.json({
      success: true,
      count: parsedBookings.length,
      bookings: parsedBookings.slice(0), // Show first 5 for testing
    });
  } catch (error) {
    return Response.json(
      {
        error: "Failed to parse bookings",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
