import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Cart = ({ onAddToCart, onRemoveFromCart, cartItems }) => {
  // const [inCart, setInCart] = useState(cartItems);

  

  return (
    <button className="flex z-10">
      <button
        className="border-[2px] border-slate-100 bg-slate-900 hover:bg-slate-500 rounded-lg text-white text-nowrap outline-none py-1 px-1 transition-all"
        onClick={() => setInCart(onAddToCart)}
      >
        Add to Cart{" "}
      </button>
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
