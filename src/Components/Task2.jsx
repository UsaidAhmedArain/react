import React from "react";
import { LuRefreshCw } from "react-icons/lu";
const Task2 = () => {
  return (
    <div>
      <div className="bg-gray-900 w-2/4 p-8">
        <h1 className="font-bold text-xl">APPLE INC.</h1>
        <div className="flex gap-6 mt-2">
          <div className="flex flex-col">
            <h1 className="font-semibold">190.40</h1>
            <h1 className="font-semibold">0.00 (0.00%)</h1>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">189.93</h3>
            <h5 className="text-gray-400 font-medium">Bid</h5>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">189.93</h3>
            <h5 className="text-gray-400 font-medium">Ask</h5>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">189.93</h3>
            <h5 className="text-gray-400 font-medium">Size</h5>
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold">38415419</h3>
            <h5 className="text-gray-400 font-medium">Volume</h5>
          </div>
        </div>
        <div className="mt-3 flex justify-center gap-4 items-center">
          <h3 className="text-sm">Real Time Quote as of 11/29/2023 1:53 am Et</h3>
          <LuRefreshCw className="text-cyan-400 font-extrabold text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Task2;
