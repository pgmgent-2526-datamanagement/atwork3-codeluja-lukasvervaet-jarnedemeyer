import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { firstName, lastName, status, active } = await request.json();

    if (!firstName || !lastName || !status) {
      return NextResponse.json(
        { error: "Missing firstName or lastName" },
        { status: 400 },
      );
    }

    const newHost = await prisma.host.create({
      data: {
        firstName,
        lastName,
        status,
        active
      },
    });

    return NextResponse.json({ host: newHost }, { status: 201 });
  } catch (err) {
    console.error("[ADD_HOST_ERROR]", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
