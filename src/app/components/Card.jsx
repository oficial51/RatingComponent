'use client'

import React from "react";
import icon from "../../../public/icon-star.svg";

import Image from "next/image";

const Card = ({render, handleSelected, selected, setSumbitted}) => {
  const rating = [1, 2, 3, 4, 5];





  return (
    <main className=" bg-VeryDarkBlue w-screen h-screen flex items-center justify-center">
      <div className="w-[330px] h-[366px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#222833] to-[#171E28] rounded-2xl">
        <div className="m-6 flex flex-col">
          <div className="p-3 mt-1 rounded-full bg-opacity-20 w-max bg-MediumGrey">
            <Image alt="star icon" src={icon}></Image>
          </div>
          <h1 className=" mt-5 mb-3 text-2xl text-white font-bold">
            How did we do?
          </h1>
          <p className=" font-normal tracking-tight text-[15px] text-gray-400">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-between">
            {rating.map((rate, i) => {
              return (
                <button

                  onClick={handleSelected}
                  type="button"
                  value={rate}
                  key={i}
                  className={` ${selected == rate ? 'bg-orange text-white' : ''}  hover:bg-MediumGrey hover:text-white text-gray-400 text-sm w-5 h-5 p-5 flex items-center mt-5 justify-center rounded-full bg-TransparentGrey`}
                >
                  {rate}
                </button>
              );
            })}
          </div>
          <button
          onClick={render} className="w-full h-11 flex justify-center items-center uppercase font-bold text-white rounded-3xl bg-orange mt-5">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default Card;
