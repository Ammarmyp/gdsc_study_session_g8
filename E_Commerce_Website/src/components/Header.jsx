import React from "react";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  return (
    <>
      <nav className="flex justify-between  bg-zinc-400 h-14 p-4">
        <h1>Header</h1>
        <FaCartShopping onClick={() => console.log("cart clicked")} />
      </nav>
    </>
  );
}

export default Header;
