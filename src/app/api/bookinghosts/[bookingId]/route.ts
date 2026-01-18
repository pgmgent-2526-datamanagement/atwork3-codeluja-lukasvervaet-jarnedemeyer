import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  context: { params: Promise<{ bookingId: string }> },
) {
  const { bookingId: bookingIdParam } = await context.params;
  const bookingId = Number(bookingIdParam);

  if (Number.isNaN(bookingId)) {
    console.warn("[API][bookinghosts][bookingId] invalid bookingId", {
      bookingIdParam,
      url: request.url,
    });
    return NextResponse.json({ error: "Invalid bookingId" }, { status: 400 });
  }

  try {
    const bookingHosts = await prisma.bookingHost.findMany({
      where: { bookingId },
      include: { host: true },
    });

    return NextResponse.json(bookingHosts);
  } catch (err) {
    console.error("[API][bookinghosts][bookingId] error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
