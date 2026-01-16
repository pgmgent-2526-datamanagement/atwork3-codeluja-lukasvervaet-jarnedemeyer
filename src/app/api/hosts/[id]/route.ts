import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const hostId = Number(id);
  if (isNaN(hostId)) {
    return NextResponse.json({ error: "Invalid host ID" }, { status: 400 });
  }

  const host = await prisma.host.findUnique({
    where: { id: hostId },
  });

  if (!host) {
    return NextResponse.json({ error: "Host not found" }, { status: 404 });
  }

  return NextResponse.json(host);
}
