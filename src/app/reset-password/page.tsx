"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import SuccesModal from "@/components/modals/SuccesModal";
import ErrorModal from "@/components/modals/ErrorModal";
import { resetPassword } from "@/utils/ui/code.util";

function Password() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordRepeatVisible, setPasswordRepeatVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [errorModal, setErrorModal] = useState<{
    open: boolean;
    message?: string;
  }>({ open: false });
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const togglePasswordRepeatVisibility = () => {
    setPasswordRepeatVisible(!passwordRepeatVisible);
  };

  const handlePasswordSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    const result = await resetPassword(event);
    if (result.success) {
      setOpenModal(true);
    } else {
      setErrorModal({ open: true, message: result.error });
    }
  };

  const handleClose = () => {
    setOpenModal(false);
    router.push("/");
  };

  const handleErrorClose = () => {
    setErrorModal({ open: false });
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col bg-white rounded-lg shadow-md border-2 border-[#05d8c8] p-10 max-w-98 h-137.5 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Reset Wachtwoord
        </h1>
        <form
          onSubmit={handlePasswordSubmit}
          className="flex flex-col space-y-6"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="new-password" className="text-gray-700 font-medium">
              Nieuw Wachtwoord
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                id="new-password"
                name="new-password"
                placeholder="••••••••"
                minLength={8}
                required
                className="border-2 border-[#05d8c8] p-3 rounded-md shadow-md w-full text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-[#05d8c8] pr-12"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {passwordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="repeat-password"
              className="text-gray-700 font-medium"
            >
              Herhaal Wachtwoord
            </label>
            <div className="relative">
              <input
                type={passwordRepeatVisible ? "text" : "password"}
                id="repeat-password"
                name="repeat-password"
                placeholder="••••••••"
                minLength={8}
                required
                className="border-2 border-[#05d8c8] p-3 rounded-md shadow-md w-full text-center text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-[#05d8c8] pr-12"
              />
              <button
                type="button"
                onClick={togglePasswordRepeatVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {passwordRepeatVisible ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#05d8c8] hover:bg-[#04c4b5] text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-200 mt-4"
          >
            Reset Wachtwoord
          </button>
        </form>
      </div>
      {openModal && (
        <SuccesModal
          close={handleClose}
          subject="Wachtwoord"
          action="gereset"
        />
      )}
      {errorModal.open && (
        <ErrorModal
          close={handleErrorClose}
          subject="Wachtwoord"
          message={errorModal.message}
        />
      )}
    </div>
  );
}

export default Password;
