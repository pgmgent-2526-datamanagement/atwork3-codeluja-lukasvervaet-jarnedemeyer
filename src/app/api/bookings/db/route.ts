import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const res = await prisma.booking.findMany({
      where: {
        status: "Booked",
        bookingDate: {
          gte: (() => {
            const now = new Date();
            const day = now.getDay();
            const diffToMonday = day === 0 ? 6 : day - 1;

            const lastMonday = new Date(now);
            lastMonday.setDate(now.getDate() - diffToMonday - 6);
            lastMonday.setHours(0, 0, 0, 0);

            return lastMonday;
          })(),
          lt: new Date(new Date().setMonth(new Date().getMonth() + 1)),
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

    //! now convert the date, startTime and endTime to a string and slice that string to get the clean version

    if (res.length === 0) {
      return Response.json([]);
    }

    // console.log("Fetched bookings from database:", res[0]);

    return Response.json(res);
  } catch (error) {
    console.error("Database error fetching bookings:", error);
    return new Response("Internal Server Error", { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
