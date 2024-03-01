import React from "react";
import Cart from "./Cart";

function Header() {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 flex justify-between  bg-zinc-400 h-14 p-4 mb-5 mt-16">
        <nav >
          <h1>Header</h1>
          {/* Move the cart to an indivitual component */}
        </nav>
        <Cart/>
      </div>
    </>
  );
}

export default Header;
