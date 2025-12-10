import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const filteredRes = await prisma.booking.findMany({
      where: {
        status: "Booked",
        startTime: {
          gte: new Date(),
          lt: new Date(new Date().setMonth(new Date().getMonth() + 1)),
        },
      },
      select: {
        id: true,
        dayOfWeek: true,
        startTime: true,
        endTime: true,
        playersCount: true,
        hostsRequired: true,
        food_required: true,
        is_b2b: true,
        packageName: true,
        bookingDescription: true,
        notes: true,
      },
      orderBy: {
        startTime: "asc",
      },
    });

    if (filteredRes.length === 0) {
      return new Response("No active bookings found", { status: 200 });
    }

    return Response.json(filteredRes);
  } catch (error) {
    console.error("Database error fetching bookings:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
