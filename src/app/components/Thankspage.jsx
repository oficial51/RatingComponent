import React from "react";
import Image from "next/image";
import thanks from "../../../public/illustration-thank-you.svg";

const Thankspage = ({ selected }) => {
  return (
    <main className=" bg-VeryDarkBlue w-screen h-screen flex items-center justify-center">
      <div className="w-[330px] h-[366px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#222833] to-[#171E28] rounded-2xl">
        <div className="m-6 flex flex-col items-center">
          <Image alt="Star Icon" src={thanks} className="mt-2"></Image>

          <h2 className="mt-6 text-orange bg-MediumGrey bg-opacity-20 py-[7px] px-3 rounded-full">
            You selected {selected} out of 5
          </h2>
          <h2 className=" mt-6 text-white text-2xl font-bold">Thank you!</h2>
          <p className="mt-2 text-center font-normal tracking-tight text-[15px] text-gray-400">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Thankspage;
