import React from "react";
import Button from "./Button";

const HomePageCategories = () => {
  return (
    <div className="flex flex-col justify-center items-center m-auto">
      <h2 className="font-semibold text-2xl mb-4">Categories</h2>
      <div className="max-w-[612px] text-center">
        <p className="text-lg sm:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          accusantium cum ratione, illum quam debitis excepturi voluptatibus
          corporis illo perferendis.
        </p>
      </div>
      <Button />
    </div>
  );
};

export default HomePageCategories;
