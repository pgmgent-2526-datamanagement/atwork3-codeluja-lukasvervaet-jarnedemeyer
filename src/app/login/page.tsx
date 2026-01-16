"use client";

import React, { useState } from "react";
import CodeModal from "@/components/CodeForm";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  const handleOpen = () => {
    setIsCodeModalOpen(true);
  };

  const handleClose = () => {
    setIsCodeModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full ">
      {!isCodeModalOpen ? (
        <LoginForm open={handleOpen} />
      ) : (
        <CodeModal close={handleClose} />
      )}
    </div>
  );
}
