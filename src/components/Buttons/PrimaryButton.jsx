import React from "react";
import "./button.css";

const PrimaryButton = ({ label, isSelected, border }) => {
  return (
    <div
      className={`${
        isSelected
          ? "primary_gradient text-white font-[700]"
          : "gray_gradient text-black font-[500]"
      }  px-2 py-1 rounded-full min-w-[70px] ${
        border ? "border-[1px]" : ""
      } cursor-pointer custom_shadow  text-[13px] min-h-[35px] flex items-center justify-center`}
    >
      {label}
    </div>
  );
};

export default PrimaryButton;
