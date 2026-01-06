"use client";

import React, { useState } from "react";
import CodeModal from "@/components/CodeForm";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  const TypedCodeModal = CodeModal as unknown as React.ComponentType<{
    close: () => void;
  }>;

  const TypedLoginForm = LoginForm as unknown as React.ComponentType<{
    open: () => void;
  }>;

  const handleOpen = () => {
    setIsCodeModalOpen(true);
  };

  const handleClose = () => {
    setIsCodeModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full ">
      {!isCodeModalOpen ? (
        <TypedLoginForm open={handleOpen} />
      ) : (
        <TypedCodeModal close={handleClose} />
      )}
    </div>
  );
}
