import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const res = await prisma.booking.findMany({
      where: {
        status: "Booked",
        bookingDate: {
          gte: new Date(
            new Date().setDate(new Date().getDate() - new Date().getDay() + 1)
          ), // monday
          lt: new Date(
            new Date().setDate(new Date().getDate() - new Date().getDay() + 7)
          ), // sunday
        },
      },
      select: {
        id: true,
        dayOfWeek: true,
        startTime: true,
        endTime: true,
        bookingDate: true,
        playersCount: true,
        hostsRequired: true,
        food_required: true,
        is_b2b: true,
        packageName: true,
        bookingDescription: true,
        notes: true,
        status: true,
      },
      orderBy: [{ bookingDate: "asc" }, { startTime: "asc" }],
    });

    if (res.length === 0) {
      return Response.json([]);
    }

    return Response.json(res);
  } catch (error) {
    console.error("Database error fetching bookings:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
