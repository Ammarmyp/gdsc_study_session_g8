import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";

const ItemsPage = () => {
  return (
    <div>
      <Header />
      <div className=" flex  justify-between items-center sm:flex-row   flex-col ">
        <div className="flex flex-col justify-starts items-left mx-2 bg-blue-600 ">
          <h1>Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            numquam.
          </p>
        </div>
        <div className="my-3">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default ItemsPage;
