import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function PATCH(request: Request) {
  try {
    const { newCode } = await request.json();

    const currentCode = prisma.user.findUnique({
      where : { email: "personeel@code.com" },
      select: { password: true }
    })

    if (newCode === (await currentCode)?.password) {
      return new Response(JSON.stringify({ message: "New code cannot be the same as the current code" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const res = await prisma.user.update({
      where : { email: "personeel@code.com"},
      data : { password: bcrypt.hashSync(newCode, 10) }
    })

    if (!res) {
      return new Response(JSON.stringify({ message: "Failed to change code" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Code changed successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error changing code:", error);
    return new Response(JSON.stringify({ message: "Failed to change code" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}