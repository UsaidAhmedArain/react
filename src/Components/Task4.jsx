import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
const Task4 = ({text}) => {
  return (
    <div>
      <div className="bg-sky-300 p-2 flex justify-between">
        <div className="flex gap-2 items-center">
          <HiBars3 className="text-3xl text-white font-bold" />
          <span className="font-extrabold text-white">
            <span className="italic">ESPN</span>
            cricinfo
          </span>
        </div>
        <div className=" flex gap-2 items-center">
          <button className="bg-white text-sm px-4 font-medium py-1 rounded-full">
            Use App
          </button>
          <IoSettingsOutline className="text-3xl text-white font-bold" />
        </div>
      </div>
      <div className="bg-sky-400 p-5">
        <div className="flex gap-4">
          <p className="font-bold text-white">Matches (8)</p>
          <p className="text-white font-light">Ban v NZ (1)</p>
          <p className="text-white font-light">Sheffield</p>
          <p className="text-white font-light">Legends League</p>
          <p className="text-white font-light">Abu Dhabi T10 (3)</p>
        </div>
        <div className="flex gap-4 mt-3 ">
          <div className="bg-white p-3 rounded-2xl">
            <div>
              <span>
                {" "}
                <span className="text-red-600">LIVE</span> .{" "}
                <span className="text-gray-500 text-sm">1st TEST Sylhet</span>
              </span>
              <div className="flex justify-between items-center">
                <p>
                  Ban <span className="text-red-900 text-4xl font-bold">.</span>
                </p>
                <p>
                  (48.6 ov)
                  <span>310 & 135/3</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>NZ</p>
                <span>317</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Day 3 - Session 2: Bangladesh lead by 128 runs
                </p>
              </div>
              <hr className="mt-3"></hr>
              <div className="flex gap-6 mt-3">
                <span className="text-gray-600">Schedule</span>
                <span className="text-gray-600">Report</span>
                <span className="text-gray-600">Series</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-2xl">
            <div>
              <span>
                {" "}
                <span className="text-red-600">LIVE</span> .{" "}
                <span className="text-gray-500 text-sm">1st TEST Sylhet</span>
              </span>
              <div className="flex justify-between items-center">
                <p>
                  Ban <span className="text-red-900 text-4xl font-bold">.</span>
                </p>
                <p>
                  (48.6 ov)
                  <span>310 & 135/3</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>NZ</p>
                <span>317</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Day 3 - Session 2: Bangladesh lead by 128 runs
                </p>
              </div>
              <hr className="mt-3"></hr>
              <div className="flex gap-6 mt-3">
                <span className="text-gray-600">Schedule</span>
                <span className="text-gray-600">Report</span>
                <span className="text-gray-600">Series</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-2xl">
            <div>
              <span>
                {" "}
                <span className="text-red-600">LIVE</span> .{" "}
                <span className="text-gray-500 text-sm">1st TEST Sylhet</span>
              </span>
              <div className="flex justify-between items-center">
                <p>
                  Ban <span className="text-red-900 text-4xl font-bold">.</span>
                </p>
                <p>
                  (48.6 ov)
                  <span>310 & 135/3</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>NZ</p>
                <span>317</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Day 3 - Session 2: Bangladesh lead by 128 runs
                </p>
              </div>
              <hr className="mt-3"></hr>
              <div className="flex gap-6 mt-3">
                <span className="text-gray-600">Schedule</span>
                <span className="text-gray-600">Report</span>
                <span className="text-gray-600">Series</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-2xl">
            <div>
              <span>
                {" "}
                <span className="text-red-600">LIVE</span> .{" "}
                <span className="text-gray-500 text-sm">1st TEST Sylhet</span>
              </span>
              <div className="flex justify-between items-center">
                <p>
                  Ban <span className="text-red-900 text-4xl font-bold">.</span>
                </p>
                <p>
                  (48.6 ov)
                  <span>310 & 135/3</span>
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p>NZ</p>
                <span>317</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">
                  Day 3 - Session 2: Bangladesh lead by 128 runs
                </p>
              </div>
              <hr className="mt-3"></hr>
              <div className="flex gap-6 mt-3">
                <span className="text-gray-600">Schedule</span>
                <span className="text-gray-600">Report</span>
                <span className="text-gray-600">Series</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
          <input type='text' className='w-2/4 border-black border-2 p-3' placeholder={text}/>
    </div>
  );
};

export default Task4;
