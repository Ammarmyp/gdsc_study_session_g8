import React from "react";
import { BsSearch } from "react-icons/bs";


const Search = () => {
  return (
    <div className="flex justify-between relative">
      <BsSearch className="absolute left-1 " />
      <input
        onSubmit={() => console.log("input value")}
        type="text"
        className="rounded-lg  w-[200px] px-2"
        placeholder="Search by Category..."
      />
    </div>
  );
};

export default Search;

