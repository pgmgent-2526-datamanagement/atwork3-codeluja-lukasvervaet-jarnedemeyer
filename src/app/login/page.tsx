"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setLoading(false);

    if (!result?.error) {
      router.push("/");
    } else {
      console.error("Failed to login", result.error);
      alert("Invalid credentials");
    }
  }

  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white rounded-lg shadow-md justify-between border-2 border-[#05d8c8] p-10 w-80 space-y-6"
      >
        <div>
          <label htmlFor="email" className="underline">
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border-2 border-[#05d8c8] p-2 rounded-md shadow-md w-full"
          />
        </div>

        <div>
          <label htmlFor="password" className="underline">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            required
            className="border-2 border-[#05d8c8] p-2 rounded-md shadow-md w-full"
          />
        </div>
        <button
          type="submit"
          className={`${
            loading ? "opacity-50 cursor-not-allowed " : ""
          }h-10 cursor-pointer flex justify-center items-center bg-[#05d8c8] text-sm text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#04b3aa] transition-colors duration-300`}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <hr />

        <div className="flex justify-center">
          {/* //? maybe open modal where user can insert the code */}
          <p>
            Or login with the{" "}
            <span className="underline text-[#03ad9f] cursor-pointer">
              code
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
