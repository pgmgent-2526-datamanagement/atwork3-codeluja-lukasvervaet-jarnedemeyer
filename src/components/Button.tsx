"use client";

import React from "react";

interface ButtonProps {
  width?: string;
  title: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ width = "32", title, onClick }) => {
  const widthClass = `w-${width}`;

  return (
    <button
      type="button"
      className={`${widthClass} cursor-pointer flex justify-center items-center bg-[#05d8c8] text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-[#04b3aa] transition-colors duration-300`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
