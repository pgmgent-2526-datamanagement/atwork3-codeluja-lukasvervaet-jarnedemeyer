import { hash } from "bcrypt";
import prisma from "@/lib/client";

interface RegisterRequestBody {
  firstname?: string; // Changed to firstName
  lastname?: string;  // Changed to lastName
  email: string;
  password: string;
}

export async function POST(req: Request): Promise<Response> {
  try {
    const body: RegisterRequestBody = await req.json();
    const { firstname, lastname, email, password } = body; // Extracting fields from body

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return new Response(JSON.stringify({ error: "User already exists." }), { status: 400 });
    }

    // Ensure a default role exists and attach it. Adjust the role name if your seed uses something else.
    const defaultRole = await prisma.userRole.upsert({
      where: { name: "user" },
      update: {},
      create: { name: "user" },
    });

    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        firstName: firstname ?? "",
        lastName: lastname ?? "",
        email,
        password: hashedPassword,
        role: { connect: { id: defaultRole.id } },
      },
    });

    return new Response(JSON.stringify({ user }), { status: 201 });
  } catch (err) {
    console.error("[REGISTER_ERROR]", err);
    const message = err instanceof Error ? err.message : "Something went wrong.";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
