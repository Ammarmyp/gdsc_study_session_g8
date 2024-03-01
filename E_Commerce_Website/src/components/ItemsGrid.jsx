import React, { useState } from "react";
import ProductCard from "./ProductCard";
import items from "../data/items";
import { Link } from "react-router-dom";
import Details from "../pages/Details";

const ItemsGrid = ({ selectedCategory, setSelectedItem }) => {
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );
  return (
    <div className="flex justify-center items-center flex-wrap">
      {(selectedCategory ? filteredItems : items).map((item) => (
        <Link
          to={`/Details/${item.id}`}
          key={item.id}
        >
          <ProductCard title={item.title}  image={item.image} />
        </Link>
      ))}
    </div>
  );
};

export default ItemsGrid;
