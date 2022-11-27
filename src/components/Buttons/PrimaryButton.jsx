import React from "react";

const PrimaryButton = ({ label, isSelected }) => {
  return (
    <div
      className={`${
        isSelected
          ? "bg-gradient-to-r from-[#FF8412] to-[#B1008A] text-white"
          : "bg-gray-300 text-black"
      }  p-2 rounded-full min-w-[70px] border-2 cursor-pointer shadow-xl `}
    >
      {label}
    </div>
  );
};

export default PrimaryButton;
