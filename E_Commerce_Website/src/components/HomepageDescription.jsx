import React from "react";
import Button from "./Button";

const HomePageDescription = ({ description, heading, btnText, category }) => {

  return (
    <div className="flex flex-col justify-center items-center my-5 w-full">
      <h2 className="font-semibold text-2xl mb-4">{heading}</h2>
      <div className="max-w-[612px] text-center">
        <p className="text-lg sm:text-sm">{description}</p>
      </div>
      <Button text={btnText}   />
      <div className="md:flex-nowrap flex flex-wrap justify-center items-center sm:w-full">
        {category}
      </div>
    </div>
  );
};

export default HomePageDescription;
