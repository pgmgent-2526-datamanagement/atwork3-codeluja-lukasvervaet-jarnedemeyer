"use client";

// Session provider wrapper for NextAuth authentication
import { SessionProvider as NextAuthProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function SessionProvider({ children }: { children: ReactNode }) {
  return (
    <NextAuthProvider refetchInterval={0} refetchOnWindowFocus={false}>
      {children}
    </NextAuthProvider>
  );
}
