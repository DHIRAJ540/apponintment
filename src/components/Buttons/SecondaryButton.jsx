import React from "react";
import "./button.css";

const SecondaryButton = ({ label, isSelected }) => {
  return (
    <div className="secondary_gradient font-[700] text-white p-2 rounded-full min-w-[90px]  cursor-pointer custom_shadow flex items-center justify-center text-[10px] min-h-[35px] ">
      {label}
    </div>
  );
};

export default SecondaryButton;
