import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const PATCH = async (request: Request) => {
  try {
    const { id, active, firstName, lastName } = await request.json();

    if (!id || active === undefined) {
      return new Response(
        JSON.stringify({ error: "Missing id or active status" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const updatedHost = await prisma.host.update({
      where: { id },
      data: {
        firstName,
        lastName,
        active,
      },
    });

    return new Response(JSON.stringify({ host: updatedHost }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("[EDIT_HOST_ERROR]", err);
    const message =
      err instanceof Error ? err.message : "Something went wrong.";
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
