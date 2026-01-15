"use client";
import React from "react";
import { ButtonProps } from "@/types/button.type";

const Button: React.FC<ButtonProps> = ({
  width = "32",
  title,
  onClick,
  loading,
}) => {
  const widthClass = `w-${width}`;

  return (
    <button
      type="button"
      className={`${widthClass} ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      } h-10 cursor-pointer flex justify-center items-center bg-[#05d8c8] text-sm text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#04b3aa] transition-colors duration-300`}
      onClick={onClick}
      disabled={loading}
    >
      {title}
    </button>
  );
};

export default Button;
