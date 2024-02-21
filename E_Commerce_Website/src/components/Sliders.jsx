import React from "react";
import image1 from "../assets/image1.jpg";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function Sliders() {
  return (
    <div className="w-full h-[600px] relative bg-cover bg-center  m-auto px-4 group">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-300">
        <img
          className="w-full h-full items-center mx-auto rounded object-cover"
          src={image1}
        />
      </div>
      <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronLeft />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronRight />
      </div>
    </div>
  );
}

export default Sliders;
