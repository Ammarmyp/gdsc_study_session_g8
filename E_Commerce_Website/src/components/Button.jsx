import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  return (
    <Link to={"/ItemsPage"}>
      <button className="w-[312px] bg-slate-900/25 rounded-md p-2 my-6  text-lg">
        {text}
      </button>
    </Link>
  );
};

export default Button;
