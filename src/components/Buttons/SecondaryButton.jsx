import React from "react";

const SecondaryButton = ({ label, isSelected }) => {
  return (
    <div className="bg-gradient-to-r from-[#B1008A] to-[#060D67] text-white p-2 rounded-full min-w-[90px] border-2 cursor-pointer text-xs flex items-center justify-center">
      {label}
    </div>
  );
};

export default SecondaryButton;
