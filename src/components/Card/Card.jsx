import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";
import DoctorImg from "../../assets/doctor.png";

const Card = () => {
  return (
    <div className="bg-gray-100 px-2 py-4 rounded-[9px] my-4">
      <div className="flex items-center justify-between">
        <PrimaryButton label={"Clinic"} isSelected={true} />
        <PrimaryButton label={"Test"} isSelected={false} />
        <PrimaryButton label={"Surgery"} isSelected={false} />
        <PrimaryButton label={"Medicine"} isSelected={false} />
      </div>
      <div className="flex items-center">
        <img src={DoctorImg} alt="doctor" />
        <div className="text-left ml-4 py-6 my-1 ">
          <p className="my-1">17 september 2021, 9.30 PM</p>
          <p className="text-[#E97000] my-1">Appointment with Doctor Arun</p>
          <p>Doctor World Clinic</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <SecondaryButton label={"RESHEDULE"} />
        <SecondaryButton label={"CANCEL"} />
        <div className="flex items-center border-[1px] border-solid border-black rounded-full p-2 bg-white text-xs">
          <AiOutlineEye size={16} />
          <p className="ml-1">VIEW</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
