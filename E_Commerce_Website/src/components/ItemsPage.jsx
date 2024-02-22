import React from "react";
import Header from "./Header";
import Search from "./Search";

const ItemsPage = () => {
  return (
    <div>
      <Header />
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center m-auto">
          <h1>Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
            numquam.
          </p>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default ItemsPage;
