"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { changeCode, resetPassword } from "@/utils/code.util";
import { useRouter } from "next/navigation";
import SuccesModal from "@/components/SuccesModal";
import ErrorModal from "@/components/ErrorModal";
import { useSession } from "next-auth/react";
import { SkeletonBookingItem } from "@/components/Loader";

function Code() {
  const { data: session, status } = useSession();
  const [visible, setVisible] = useState(false);
  const [visibleRepeat, setVisibleRepeat] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [errorModal, setErrorModal] = useState<{
    open: boolean;
    message?: string;
  }>({ open: false });
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  const router = useRouter();

  // Check if user is admin
  useEffect(() => {
    const checkAdmin = async () => {
      if (status === "loading") return;

      if (!session) {
        console.log("No session found, redirecting to login");
        router.push("/login");
        return;
      }

      console.log("Session user:", session.user);

      // Fallback: fetch from endpoint if not in session
      try {
        console.log("Fetching user data from endpoint");
        const res = await fetch("/api/auth/user");
        if (!res.ok) {
          router.push("/");
          return;
        }
        const data = await res.json();
        if (data?.user?.role_id === 1) {
          setIsAdmin(true);
          return;
        }
        router.push("/");
      } catch (error) {
        console.error("Error checking admin status:", error);
        router.push("/");
      }
    };

    checkAdmin();
  }, [session, status, router]);

  // Show loader while checking auth
  if (status === "loading" || isAdmin === null) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <SkeletonBookingItem />
      </div>
    );
  }

  // If not admin, don't render anything (will redirect)
  if (!isAdmin) {
    return null;
  }

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  const toggleVisibilityRepeat = () => {
    setVisibleRepeat(!visibleRepeat);
  };

  const handleCodeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const result = await changeCode(event);
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
      <div className="flex flex-col bg-white rounded-lg shadow-md border-2 border-[#05d8c8] p-10 max-w-98 h-[550px] space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Wijzig Inlogcode
          </h1>
          <form onSubmit={handleCodeSubmit} className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="new-code" className="text-gray-700 font-medium">
                Nieuwe Code
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
              <label
                htmlFor="repeat-code"
                className="text-gray-700 font-medium"
              >
                Herhaal Code
              </label>
              <div className="relative">
                <input
                  placeholder="••••"
                  type={visibleRepeat ? "text" : "password"}
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
                  onClick={toggleVisibilityRepeat}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  {visibleRepeat ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#05d8c8] hover:bg-[#04c4b5] text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-200 mt-4"
            >
              Wijzig Code
            </button>
          </form>
        </div>
      </div>
      {openModal && (
        <SuccesModal
          close={() => {
            handleClose();
          }}
          subject="Code"
          action="gewijzigd"
        />
      )}
      {errorModal.open && (
        <ErrorModal
          close={handleErrorClose}
          subject="Code"
          message={errorModal.message}
        />
      )}
    </div>
  );
}

export default Code;
