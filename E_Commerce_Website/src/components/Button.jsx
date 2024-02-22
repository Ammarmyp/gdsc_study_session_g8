import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-[312px] bg-slate-900/25 rounded-md p-2 my-6  text-lg">
      {text}
    </button>
  );
};

export default Button;
