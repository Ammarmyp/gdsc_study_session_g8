import React, { useState } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Filters from "../components/Filters";
import ItemsGrid from "../components/ItemsGrid";

const ItemsPage = () => {
  const [selectedCategory, setCategory] = useState(null);

  return (
    <>
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
        <div className="flex justify-between items-center my-3 mx-3">
          <Filters onSelectCategory={(category) => setCategory(category)} />
        </div>
      </div>
      <ItemsGrid selectedCategory={selectedCategory} />
    </>
  );
};

export default ItemsPage;
