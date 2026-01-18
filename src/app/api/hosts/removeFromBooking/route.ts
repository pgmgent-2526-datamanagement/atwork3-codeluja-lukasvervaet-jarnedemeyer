import { PrismaClient } from "@prisma/client";

export const DELETE = async (request: Request) => {
  try {
    const { bookingId, hostId } = await request.json();

    if (!bookingId || !hostId) {
      return new Response(
        JSON.stringify({ error: "Missing bookingId or hostId" }),
        { status: 400 }
      );
    }

    const prisma = new PrismaClient();

    const deletedBookingHost = await prisma.bookingHost.deleteMany({
      where: {
        bookingId,
        hostId,
      },
    });

    return new Response(
      JSON.stringify({ deletedCount: deletedBookingHost.count }),
      { status: 200 }
    );
  } catch (err) {
    console.error("[REMOVE_FROM_BOOKING_ERROR]", err);
    const message = err instanceof Error ? err.message : "Something went wrong.";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}