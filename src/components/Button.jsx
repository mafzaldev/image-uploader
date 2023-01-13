import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-[#2F80ED] text-xs text-medium text-[#FFFFFF] rounded-lg py-2 px-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
