import React from "react";

const ProductCard = ({ title, image }) => {
  return (
    <div className="bg-gray-300 sm:w-[400px] w-[300px] h-[320px] flex justify-center items-center  mx-3 p-2 my-4 rounded-xl">
      <div className="w-full h-full rounded-2xl bg-center bg-cover overflow-hidden transition-all duration-300 p-2">
        <img
          src={image}
          className="w-full h-full items-center mx-auto rounded object-center object-cover duration-700 transition-all"
        />
      </div>
      <h3 className="text-left">{title}</h3>
      <h3>Cart</h3>
    </div>
  );
};

export default ProductCard;
