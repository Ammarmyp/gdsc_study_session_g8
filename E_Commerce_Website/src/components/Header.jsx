import React from "react";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 flex justify-between  bg-zinc-400 h-14 p-4 mb-5 ">
        <h1>Header</h1>
        {/* Move the cart to an indivitual component */}
        <FaCartShopping onClick={() => console.log("cart clicked")} />
      </nav>
    </>
  );
}

export default Header;
