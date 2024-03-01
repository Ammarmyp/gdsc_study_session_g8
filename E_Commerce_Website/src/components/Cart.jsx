import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Cart = ({ cartItems }) => {
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const latestCartUpdate = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...cartItems,
              quantity: item.quantity + 1,
            }
          : item
      );
    }
    console.log(latestCartUpdate);
  };

  return (
    <button className="flex">
      <p>+</p> <FaCartShopping className="size-6" />
    </button>
  );
};

export default Cart;
