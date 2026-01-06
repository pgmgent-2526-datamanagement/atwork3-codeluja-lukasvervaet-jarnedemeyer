import { NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
import { authOptions } from "../[...nextauth]/route";
import prisma from "@/lib/client";
import { getServerSession } from "next-auth";

export async function GET(): Promise<Response> {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { email: String(session.user.email) },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role_id: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("GET_USER_ERROR:", error);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
