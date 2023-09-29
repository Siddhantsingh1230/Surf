import React from "react";
import icon from "../assets/images/arrow.gif";

const ScrollUpBtn = () => {
  //bg-[#4F46E5]
  return (
    <>
      <div className="flex justify-center  hover:opacity-95 font-black text-md  items-center h-full w-full bg-[#343333] text-white">
        <i className="ri-arrow-up-line"></i>
      </div>
    </>
  );
};

export default ScrollUpBtn;
