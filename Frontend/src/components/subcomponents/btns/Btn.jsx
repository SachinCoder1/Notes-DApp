import React from "react";

export default function Btn({ text, onClick, type = "button", className, ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-blue-500 text-white hover:text-gray-100 text-lg px-2 py-2 my-2 rounded-md transition-all disabled:bg-secondary-very-light ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}