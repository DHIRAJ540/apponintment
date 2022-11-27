import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import DoctorImg from "../../assets/doctor.png";

const Card = () => {
  return (
    <div className="bg-[#f7f7f7] px-2 py-6 rounded-[9px] my-[13px]">
      <div className="flex items-center justify-between">
        <PrimaryButton label={"Clinic"} isSelected={true} />
        <PrimaryButton label={"Test"} isSelected={false} />
        <PrimaryButton label={"Surgery"} isSelected={false} />
        <PrimaryButton label={"Medicine"} isSelected={false} />
      </div>
      <div className="flex items-center">
        <img src={DoctorImg} alt="doctor" />
        <div className="text-left ml-4 py-6 my-1 ">
          <p className="my-1 text-sm">17 september 2021, 9.30 PM</p>
          <p className="text-[#E97000] my-1 text-sm">
            Appointment with Doctor Arun
          </p>
          <p className="text-sm">Doctor World Clinic</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <SecondaryButton label={"RESHEDULE"} />
        <SecondaryButton label={"CANCEL"} />
        <div className="flex items-center justify-center border-[1px] border-solid border-[#999999] rounded-full p-2 bg-white min-w-[89px]">
          <AiOutlineEye size={18} />
          <p className="ml-1 text-[10px] font-[700]">VIEW</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
