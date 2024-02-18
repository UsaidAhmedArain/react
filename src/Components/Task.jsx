import React from "react";
import { RxCross2 } from "react-icons/rx";
import { IoCaretForwardCircleOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
const Task = () => {
  return (
    <div>
      <div className="bg-gray-700 w-2/4 p-8">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl text-white">Quick Trade</h1>
          <RxCross2 className="text-3xl cursor-pointer text-cyan-500" />
        </div>
        <div className="flex mt-2 gap-1">
          <input type="text" className="w-full" />
          <span className="p-4 bg-cyan-300 rounded-sm">
            <IoIosArrowForward className="text-black text-2xl" />
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <IoCaretForwardCircleOutline className="text-cyan-500 text-2xl" />
          <span className="text-cyan-500 font-medium">
            View QuickTrade Help Videos
          </span>
        </div>
        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="text-cyan-500 font-bold hover:border-t-2 transition-all hover:border-cyan-500"
          >
            Quote
          </a>
          <a
            href="#"
            className="text-purple-500 hover:border-t-2 transition-all hover:border-purple-500"
          >
            TRADE TICKET
          </a>
        </div>
        <div className="bg-gray-500"></div>
      </div>
    </div>
  );
};

export default Task;
