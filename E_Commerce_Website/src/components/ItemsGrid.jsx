import React, { useState } from "react";
import ProductCard from "./ProductCard";
import items from "../data/items";
import { Link } from "react-router-dom";
import Details from "../pages/Details";

const ItemsGrid = ({ selectedCategory, setSelectedItem }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (itemToCart) => {
    const inCart = cartItems.map((item) =>
      item.id === itemToCart.id ? itemToCart : item
    );
    setCartItems(inCart);
  };

  const handleRemove = (removeItem) => {
    const itemsAfterRemove = cartItems.filter(
      (item) => item.id !== removeItem.id
    );
    setCartItems(itemsAfterRemove);
  };

  const filteredItems = items.filter(
    (item) => item.category === selectedCategory
  );
  return (
    <div className="flex justify-center items-center flex-wrap">
      {(selectedCategory ? filteredItems : items).map((item) => (
        <Link to={`/Details/${item.id}`} key={item.id}>
          <ProductCard
            title={item.title}
            image={item.image}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemove}
            cartItems={cartItems}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemsGrid;
