import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { loginWithCode } from "@/utils/auth/login.util";

function CodeModal({ close }: { close: () => void }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [codeVisible, setCodeVisible] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    setLoading(true);
    const loginCodeData = await loginWithCode(event);
    if (loginCodeData) {
      setLoading(false);
      router.push("/bookings");
    }
  }
  return (
    <div className="flex justify-center items-center h-screen w-full ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white rounded-lg shadow-md justify-between border-2 border-[#05d8c8] p-10 w-80 space-y-2"
      >
        <label htmlFor="code" className="underline">
          Code
        </label>

        <div className="relative">
          <input
            type={codeVisible ? "text" : "password"}
            id="code"
            name="code"
            className="border-2 border-[#05d8c8] p-2 pr-10 rounded-md shadow-md w-full"
            placeholder="••••••"
            required
          />
          <button
            type="button"
            onClick={() => setCodeVisible((prev) => !prev)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={codeVisible ? "Code verbergen" : "Code tonen"}
          >
            {codeVisible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          className="h-10 cursor-pointer flex justify-center items-center bg-[#05d8c8] text-sm text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#04b3aa] transition-colors duration-300"
          type="submit"
          disabled={loading}
        >
          {loading ? "Inloggen..." : "Inloggen"}
        </button>

        <div className="flex justify-center">
          {/* //? maybe open modal where user can insert the code */}
          <p>
            Ga terug naar het{" "}
            <span
              onClick={close}
              className="underline text-[#03ad9f] cursor-pointer"
            >
              loginformulier
            </span>
            .
          </p>
        </div>
      </form>
    </div>
  );
}

export default CodeModal;
