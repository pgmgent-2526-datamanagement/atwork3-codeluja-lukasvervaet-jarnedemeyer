import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const hosts = await prisma.host.findMany({
      include: {
        bookingHosts: {
          include: {
            booking: {
              select: {
                id: true,
                startTime: true,
                endTime: true,
                bookingDate: true,
              },
            },
          },
        },
      },
    });
    return NextResponse.json({ hosts }, { status: 200 });
  } catch (err) {
    console.error("[HOSTS_FETCH_ERROR]", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
