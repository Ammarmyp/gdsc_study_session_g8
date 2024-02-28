import React from "react";
import categories from "../data/categories";

const Filters = ({ onSelectCategory }) => {
  return (
    <>
      <ul className="flex justify-center items-center gap-4 flex-wrap">
        {categories.map((category) => (
          <button
            onClick={() => onSelectCategory(category)}
            className="bg-slate-200 hover:bg-slate-700 text-black hover:text-white font-medium py-1 px-4 rounded-lg transition-all"
            key={category}
          >
            {category}{" "}
          </button>
        ))}
      </ul>
    </>
  );
};

export default Filters;
