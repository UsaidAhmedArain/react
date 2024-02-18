import React from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosLogIn } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import OpenSeaLogo from "../assets/images/openlogo.svg";
const OpenSea = () => {
  return (
    <>
      <header className="flex justify-between items-center px-3 py-3 bg-[#585655]">
        <div className="flex gap-5 items-center">
          <img src={OpenSeaLogo} alt="openLogo" className="h-10" />
          <h1 className="text-white text-2xl font-black">OpenSea</h1>
          <span className="border-r h-8"></span>
          <h1 className="text-white text-xl font-medium">Drops</h1>
          <h1 className="text-white text-xl font-medium">Stats</h1>
          <h1 className="text-white text-xl font-medium">Create</h1>
        </div>
        <div className="w-[40%]">
          <div className="flex items-center  p-1 bg-[#42403f]  gap-3 py-2 ">
            <IoIosSearch className="text-white text-lg" />
            <input
              type="text"
              placeholder="Search"
              className="w-[100%] outline-none bg-[#42403f] text-white"
            />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <button className="flex items-center gap-2 text-white text-base bg-[#42403f] px-6 rounded-lg py-2">
            <IoIosLogIn className="text-2xl font-black" />
            Login
          </button>
          <button className="p-2 bg-[#42403f]">
            <CgProfile className="text-white text-lg " />
          </button>
          <button  className="p-2 bg-[#42403f]">
            <BsCart2 className="text-white text-lg bg-[#42403f]"></BsCart2>
          </button>
        </div>
      </header>
    </>
  );
};

export default OpenSea;
