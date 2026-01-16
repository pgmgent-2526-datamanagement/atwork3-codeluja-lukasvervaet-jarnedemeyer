import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const hosts = await prisma.host.findMany();
    return NextResponse.json({ hosts }, { status: 200 });
  } catch (err) {
    console.error("[HOSTS_FETCH_ERROR]", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
