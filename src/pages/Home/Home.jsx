import React from "react";
import Card from "../../components/Card/Card";
import { IoIosArrowBack } from "react-icons/io";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const Home = () => {
  return (
    <div className="max-w-xl mx-auto mt-2 p-2">
      <div className="flex items-center justify-between py-4">
        <IoIosArrowBack size={20} />
        <div>
          <p>UPCOMING APPOINTMENTS</p>
        </div>
        <div></div>
      </div>

      <div className="bg-gradient-to-r from-[#0037C5] to-[#08005F] p-2 flex items-center justify-between rounded-[9px] px-4 py-6">
        <p className="text-white font-semibold">New Booking In 2 Minutes</p>
        <PrimaryButton label={"Book Now"} isSelected={true} />
      </div>
      <div>
        <Card />
        <Card />
      </div>
      <div>
        <div className="flex items-center justify-center bg-gray-200 cursor-pointer shadow-lg py-2 rounded-full">
          <p>BACK</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
