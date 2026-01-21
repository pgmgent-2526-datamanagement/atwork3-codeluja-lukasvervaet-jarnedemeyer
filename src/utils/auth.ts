import { Session } from "next-auth";

export async function isAdmin(session: Session | null): Promise<boolean> {
  if (!session) {
    return false;
  }

  try {
    const res = await fetch("/api/auth/user");
    if (!res.ok) {
      return false;
    }
    const data = await res.json();
    return data?.user?.role_id === 1;
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
}
