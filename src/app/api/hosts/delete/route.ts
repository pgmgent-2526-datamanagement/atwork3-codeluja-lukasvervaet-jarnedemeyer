import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (request: Request) => {
  try {
    const { id } = await request.json();

    if (!id) {
      return new Response(
        JSON.stringify({ error: "Missing id" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    await prisma.host.delete({
      where: { id },
    });

    return new Response(JSON.stringify({ message: "Host deleted successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[DELETE_HOST_ERROR]", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}