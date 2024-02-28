import React from "react";

const ProductCard = ({ title, image }) => {
  return (
    <div className="bg-slate-100 border-solid border-[2px] border-slate-200 sm:w-[300px] w-[270px] h-[320px]  justify-center items-center  mx-2 p-[2px] my-4 rounded-xl transition-all">
      <div className="w-full h-[230px] rounded-3xl bg-center bg-cover overflow-hidden transition-all duration-300 mb-2">
        <img
          src={image}
          className="w-full h-full items-center  rounded-2xl object-center object-cover duration-700 transition-all p-1"
        />
      </div>
      <div className=" flex justify-between items-center mx-1 mt-2 p-2 text-sm font-medium">
        <h3 className="w-[210px] text-left">{title}</h3>
        <h3>Cart</h3>
      </div>
    </div>
  );
};

export default ProductCard;
