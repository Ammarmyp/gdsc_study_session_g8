import React from "react";
import { BsSearch } from "react-icons/bs";


const Search = () => {
  return (
    <div className="flex justify-between relative">
      <BsSearch className="absolute left-2 top-1  " />
      <input
        onSubmit={() => console.log("input value")}
        type="text"
        className="rounded-xl  w-[200px] px-7 border border-black outline-none"
        placeholder="Search by Category..."
      />
    </div>
  );
};

export default Search;

