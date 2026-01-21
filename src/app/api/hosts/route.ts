// API route for fetching all hosts with their booking relationships
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

    // inactive hosts should be last
    const filteredHosts = hosts.sort((a, b) => {
      if (a.active === b.active) return 0;
      if (a.active && !b.active) return -1;
      return 1;
    });
    return NextResponse.json({ hosts: filteredHosts }, { status: 200 });
  } catch (err) {
    console.error("[HOSTS_FETCH_ERROR]", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
