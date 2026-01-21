// API route for assigning a host to a booking
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { bookingId, hostId } = await request.json();

    if (!bookingId || !hostId) {
      return NextResponse.json(
        { error: "Missing bookingId or hostId" },
        { status: 400 },
      );
    }

    const newBookingHost = await prisma.bookingHost.create({
      data: {
        bookingId,
        hostId,
      },
    });

    return NextResponse.json({ bookingHost: newBookingHost }, { status: 201 });
  } catch (err) {
    console.error("[ADD_TO_BOOKING_ERROR]", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
