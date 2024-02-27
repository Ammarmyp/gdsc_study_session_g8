import React from "react";
import ProductCard from "./ProductCard";
import items from "../data/items";

const ItemsGrid = ({ selectedCategory }) => {
  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );
  return (
    <div className="flex justify-center items-center flex-wrap">
      {(selectedCategory ? filteredItems : items).map((item) => (
        <ProductCard key={item.id} title={item.title} image={item.image} />
      ))}
    </div>
  );
};

export default ItemsGrid;
