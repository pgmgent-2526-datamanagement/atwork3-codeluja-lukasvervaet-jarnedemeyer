"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/utils/login.util";

export default function LoginPage({ open }: { open: () => void }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true);
    const loginData = await loginUser(event);
    if (loginData) {
      setLoading(false);
      router.push("/bookings");
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
            placeholder="john.doe@example.com"
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
            placeholder="••••••••"
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
            <span
              onClick={open}
              className="underline text-[#03ad9f] cursor-pointer"
            >
              code
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
