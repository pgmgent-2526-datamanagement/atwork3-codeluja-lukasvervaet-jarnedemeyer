"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";

export default function LogoutPage() {
  useEffect(() => {
    // Trigger sign out and redirect back to login
    signOut({ callbackUrl: "/login" });
  }, []);

  return <p>Signing you out…</p>;
}
