"use client"

import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { changeCode } from '@/utils/code.util';
import { useRouter } from 'next/navigation';

function Code() {
  const [visible, setVisible] = useState(false);

  const router = useRouter();

  const toggleVisibility = () => {
    setVisible(!visible);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    await changeCode(event);
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col bg-white rounded-lg shadow-md border-2 border-[#05d8c8] p-10 w-96 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Change Login Code
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="new-code" className="underline text-gray-700 font-medium">
              New Code
            </label>
            <div className="relative">
              <input
                placeholder="••••"
                type={visible ? "text" : "password"}
                id="new-code"
                name="new-code"
                pattern="\d{4}"
                inputMode="numeric"
                minLength={4}
                maxLength={4}
                required
                className="border-2 border-[#05d8c8] p-3 rounded-md shadow-md w-full text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-[#05d8c8] pr-12"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {visible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="repeat-code" className="underline text-gray-700 font-medium">
              Repeat Code
            </label>
            <div className="relative">
              <input
                placeholder="••••"
                type={visible ? "text" : "password"}
                id="repeat-code"
                name="repeat-code"
                pattern="\d{4}"
                inputMode="numeric"
                minLength={4}
                maxLength={4}
                required
                className="border-2 border-[#05d8c8] p-3 rounded-md shadow-md w-full text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-[#05d8c8] pr-12"
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {visible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#05d8c8] hover:bg-[#04c4b5] text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-200 mt-4"
          >
            Change Code
          </button>
        </form>
      </div>
    </div>
  );
}

export default Code
