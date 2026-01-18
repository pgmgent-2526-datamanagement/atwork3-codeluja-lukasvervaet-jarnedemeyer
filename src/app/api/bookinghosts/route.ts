import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {


  const bookingHostData = await prisma.bookingHost.findMany();

  if (!bookingHostData) {
    return NextResponse.json({ error: "No BookingHost Data not found" }, { status: 404 });
  }

  return NextResponse.json(bookingHostData);
}
