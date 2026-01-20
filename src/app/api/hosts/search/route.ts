import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, HostStatus } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json({ hosts: [] }, { status: 200 });
    }

    const searchTerm = query.toLowerCase();

    const statusValues = Object.values(HostStatus).map(s => s.toLowerCase());
    const statusFilter = statusValues.includes(searchTerm)
      ? { status: { equals: searchTerm.toUpperCase() as HostStatus } }
      : {};

    const hosts = await prisma.host.findMany({
      where: {
        OR: [
          {
            firstName: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            lastName: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          ...(Object.keys(statusFilter).length > 0 ? [statusFilter] : []),
        ],
      },
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
    console.error("[HOSTS_SEARCH_ERROR]", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
