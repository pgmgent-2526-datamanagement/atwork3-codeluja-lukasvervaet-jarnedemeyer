// Middleware for authentication and authorization checks
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import prisma from "@/lib/client";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname, origin } = req.nextUrl;
  if (pathname === "/login" || pathname === "/register") {
    return NextResponse.next();
  }

  if (!token) {
    const signInUrl = new URL("/login", origin);
    signInUrl.searchParams.set(
      "callbackUrl",
      req.nextUrl.pathname + req.nextUrl.search,
    );
    return NextResponse.redirect(signInUrl);
  }

  // Check if user is trying to access admin-only routes
  if (pathname === "/code" || pathname === "/hosts") {
    try {
      const user = await prisma.user.findUnique({
        where: { email: token.email as string },
        select: { role_id: true },
      });

      // If user is not admin (role_id !== 1), redirect to home
      if (!user || user.role_id !== 1) {
        return NextResponse.redirect(new URL("/", origin));
      }
    } catch (error) {
      console.error("Middleware error:", error);
      return NextResponse.redirect(new URL("/", origin));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/bookings", "/", "/staff", "/code", "/hosts"],
};
