import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request, context: { params?: { bookingId?: string } }) {
  const paramsBookingId = (await context?.params)?.bookingId;
  // try params first, then fallback to parsing from the URL
  let bookingId = paramsBookingId ? Number(paramsBookingId) : NaN;
  if (Number.isNaN(bookingId)) {
    try {
      const url = new URL(request.url);
      // try last segment of pathname
      const parts = url.pathname.split("/").filter(Boolean);
      const last = parts[parts.length - 1];
      bookingId = Number(last);
    } catch (err) {
      console.error("[API][bookinghosts][bookingId] URL parse error", err);
    }
  }

  if (Number.isNaN(bookingId)) {
    console.warn("[API][bookinghosts][bookingId] invalid bookingId", { paramsBookingId, url: request.url });
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
