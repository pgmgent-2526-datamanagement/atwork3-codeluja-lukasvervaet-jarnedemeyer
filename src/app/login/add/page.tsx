"use client";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/utils/register.util";

export default function Register() {
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const userData = await registerUser(event);
    if (userData) {
      router.push("/login");
    }
  }
  return (
    <div className="flex flex-col">
      <h1>Register Page</h1>
      <p>Maak hier een account aan</p>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstname" required />
        <br />
        <label>Last Name:</label>
        <input type="text" name="lastname" required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
