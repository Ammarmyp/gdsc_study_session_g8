import React, { useState } from "react";
import image1 from "../assets/image1.jpg";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

function Sliders() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const prevItem = () => {
    const isFirstItem = currentIndex === 0;
    const newItem = isFirstItem ? itemImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newItem);
  };

  const nextItem = () => {
    const isLastItem = currentIndex === itemImages.length - 1;
    const newItem = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newItem);
  };

  return (
    <div className="w-full  h-[612px] relative bg-cover bg-center  m-auto px-4 group mb-10">
      <div className="w-full h-full rounded-2xl bg-center bg-cover transition-all duration-300 p-2">
        <img
          className="w-full h-full items-center mx-auto rounded object-center object-cover duration-700 transition-all"
          src={itemImages[currentIndex].url}
        />
      </div>
      <div className="hidden group-hover:block  absolute top-[50%] -translate-x-0 translate-y[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronLeft onClick={prevItem} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronRight onClick={nextItem} />
      </div>
    </div>
  );
}

export default Sliders;
