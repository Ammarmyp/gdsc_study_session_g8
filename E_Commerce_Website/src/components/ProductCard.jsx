import React from "react";

const ProductCard = ({title, image}) => {
  return (
    <div className="bg-blue-900 w-[320px] h-[400px] flex justify-center items-center mx-3 p-2 my-2">
      <img src= {image} />
      <h3>{title}</h3>
    </div>
  );
};

export default ProductCard;
