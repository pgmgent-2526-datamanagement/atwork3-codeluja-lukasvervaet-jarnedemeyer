import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function PATCH(request: Request) {
  try {
    const { email, newPassword } = await request.json();

    const res = await prisma.user.update({
      where : { email: email },
      data : { password: bcrypt.hashSync(newPassword, 10) }
    })

    if (!res) {
      return new Response(JSON.stringify({ message: "Failed to reset password" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Password reset successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error resetting password:", error);
    return new Response(JSON.stringify({ message: "Failed to reset password" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}