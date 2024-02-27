import React from "react";
import categories from "../data/categories";

const Filters = ({onSelectCategory}) => {
  return (
    <ul className="flex justify-center items-center gap-4">
      {categories.map((category) => (
        <button onClick={() => onSelectCategory(category)} className="border" key={category}>
          {category}{" "}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
