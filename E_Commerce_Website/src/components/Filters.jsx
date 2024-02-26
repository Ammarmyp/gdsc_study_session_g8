import React from "react";
import items from "../data/items";
import categories from "../data/categories";

const Filters = () => {
  return (
    <ul className="flex justify-center items-center gap-4">
      {categories.map((category) => (
        <li className="border" key={category}>
          {category}{" "}
        </li>
      ))}
    </ul>
  );
};

export default Filters;
