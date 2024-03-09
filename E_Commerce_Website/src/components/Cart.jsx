import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = ({ onAddToCart, onRemoveFromCart, cartItems }) => {
  const [inCart, setInCart] = useState(cartItems);

  return (
    <button className="flex z-10">
      <button onClick={() => setInCart(onAddToCart)}>Add to Cart </button>
      <p>+</p>
      {console.log(cartItems)}
      <Link to={`/CartPage/${cartItems}`}>
        {" "}
        <FaCartShopping className="size-6" />
      </Link>
    </button>
  );
};

export default Cart;
