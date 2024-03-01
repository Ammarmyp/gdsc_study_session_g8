import React from "react";
import { CgCopyright } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="w-full h-[150px]  text-center bg-slate-600 text-2xl py-6 mt-4 flex flex-col justify-center items-center">
      By Ammar Mohammed
      <CgCopyright />
    </div>
  );
};

export default Footer;
