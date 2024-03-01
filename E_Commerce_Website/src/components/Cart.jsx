import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
      <p>+</p>
      <Link to={"/CartPage"}>
        {" "}
        <FaCartShopping className="size-6" />
      </Link>
    </button>
  );
};

export default Cart;
