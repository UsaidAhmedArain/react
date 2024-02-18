import React from "react";
import { FaAngleDown } from "react-icons/fa6";
const Task3 = () => {
  return (
    <div>
      <div className="bg-gray-700 w-2/4 p-8">
        <div className="flex">
          <input
            type="text"
            className="border border-black w-full bg-gray-300 text-black"
          ></input>
          <span className="bg-gray-300 p-3 border border-black">
            <FaAngleDown className="text-black text-2xl cursor-pointer" />
          </span>
        </div>
        <div className="flex gap-20 mt-4">
          <div>
            <h3 className="font-semibold">$70.91</h3>
            <h4 className="text-sm">Cash Available for investment</h4>
          </div>
          <div>
            <h3 className="font-semibold">$80.63</h3>
            <h4>Total Account Value </h4>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="text-purple-500 hover:border-t-2 transition-all hover:border-purple-500"
          >
            Stock
          </a>
          <a
            href="#"
            className="text-cyan-500 font-bold hover:border-t-2 transition-all hover:border-cyan-500"
          >
            Options
          </a>
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <h1 className="font-semibold">Action</h1>
            <div className="flex ">
              <input type="text" className="border border-black w-full bg-gray-300 text-black"
              ></input>
              <span className="border border-black p-3 bg-gray-300 text-black">
                <FaAngleDown className="text-black text-2xl cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="font-semibold">Quantity</span>
            <div className="flex ">
              <input type="text" className="border border-black bg-gray-300 text-black"
              ></input>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h1 className="font-semibold">Order Type</h1>
            <div className="flex ">
              <input type="text" className="border border-black w-full bg-gray-300 text-black"
              ></input>
              <span className="border border-black p-3 bg-gray-300 text-black">
                <FaAngleDown className="text-black text-2xl cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <h1 className="font-semibold">Duration</h1>
            <div className="flex ">
              <input type="text" className="border border-black w-full bg-gray-300 text-black"
              ></input>
              <span className="border border-black p-3 bg-gray-300 text-black">
                <FaAngleDown className="text-black text-2xl cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task3;
