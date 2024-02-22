import React from "react";
import Button from "./Button";
import ProductCard from "./ProductCard";

const HomePageDescription = ({ description, heading, btnText }) => {
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h2 className="font-semibold text-2xl mb-4">{heading}</h2>
      <div className="max-w-[612px] text-center">
        <p className="text-lg sm:text-sm">{description}</p>
      </div>
      <Button text={btnText} />
      <div className="flex justify-center items-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default HomePageDescription;
