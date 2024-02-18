import React from "react";
import eye from "../assets/images/eye.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import instagram from "../assets/images/instagram.png"
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
const DailyTask = () => {
  return (
    <div className="">
      <div className="px-6 flex gap-10">
        <div className="bg-white shadow-md p-6 w-3/5 rounded-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-[#2D2B2B] font-medium text-2xl">DailyTask</h1>
            <div className="flex flex-col">
              <span className="font-normal flex items-center gap-5 text-sm text-[#263238]">
                3/11 Task Completed
                <span className="font-medium  text-base">View All</span>
              </span>
              <div className="h-2 bg-[#F2F2F2] w-36 rounded-2xl">
                <span className="h-2 bg-[#FF0032] w-20 absolute rounded-2xl"></span>
              </div>
            </div>
          </div>
          <table className="table-auto mt-6 w-full">
            <thead>
              <tr className="bg-[#263238] text-left">
                <th className="text-white  font-medium text-sm p-2">
                  Task Title
                </th>
                <th className="text-white font-medium text-sm">Due Date</th>
                <th className="text-white font-medium text-sm">Due Time </th>
                <th className="text-white font-medium text-sm">Task Status </th>
                <th className="text-white font-medium text-sm">View Task</th>
              </tr>
            </thead>
            <tbody className="w-full">
              <tr className="text-sm font-normal border-b">
                <td className="p-3 pb-3">Website Design</td>
                <td>07 Feb 2022</td>
                <td>2:00 pm</td>
                <td>
                  <button className="bg-[#0032FF1A]  font-normal text-[#0032FF] px-2 py-1 mt-1">
                    In Progress
                  </button>
                </td>
                <td className="p-2 mt-1 flex gap-1 items-center">
                  <img src={eye} alt="eye" />
                  View
                </td>
              </tr>

              <tr className="text-sm font-normal border-b">
                <td className="p-3 pb-3">UI or a App</td>
                <td>09 Nov 2022</td>
                <td>10:00 pm</td>
                <td>
                  <button className="bg-[#FF95001A]  font-normal text-[#FF9500] px-[.95rem] py-1 mt-1">
                    Assigned
                  </button>
                </td>
                <td className="p-2 mt-1 flex gap-1 items-center">
                  <img src={eye} alt="eye" />
                  View
                </td>
              </tr>

              <tr className="text-sm font-normal border-b">
                <td className="p-3 pb-3">App Design</td>
                <td>01 Aug 2022</td>
                <td>04:00 am</td>
                <td>
                  <button className="bg-[#FF00001A] font-normal text-[#FF0000] px-[1.825rem] py-1 mt-1">
                    Late
                  </button>
                </td>
                <td className="p-2 mt-1 flex gap-1 items-center">
                  <img src={eye} alt="eye" />
                  View
                </td>
              </tr>

              <tr className="text-sm font-normal border-b">
                <td className="p-3 pb-3">Website Design</td>
                <td>07 Feb2022</td>
                <td>2:00 pm</td>
                <td>
                  <button className="bg-[#21B9791A]  font-normal text-[#21B979] px-2 py-1 mt-1">
                    Completed
                  </button>
                </td>
                <td className="p-2 mt-1 flex gap-1 items-center">
                  <img src={eye} alt="eye" />
                  View
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white shadow-md  rounded-lg w-[40%]">
          <h1 className="text-2xl p-4 text-[#2D2B2B] font-medium">
            Quick Links
          </h1>
          <hr></hr>
          <div className="px-4 pt-2 font-medium text-lg">
            <h1>Digital Gregg Meet Link</h1>
            <div className="bg-[#F7F8FA] mt-2 text-left py-2 p-2">
              <input
                type="text"
                placeholder="http://www.digitalgreeg/googlemeet"
                className="text-[#263238] placeholder:text-base w-[73%] outline-0 bg-[#F7F8FA]"
              ></input>
              <button className=" bg-[#263238] text-white font-medium text-sm py-2 rounded-md px-3">
                Go to meet
              </button>
            </div>
          </div>
          <div className="px-4 pt-2 font-medium text-lg">
            <h1>Digital Gregg Chat Link</h1>
            <div className="bg-[#F7F8FA] mt-2 text-left py-2 p-2">
              <input
                type="text"
                placeholder="http://www.digitalgreeg/googlechat"
                className="text-[#263238] placeholder:text-base w-[73%] outline-0 bg-[#F7F8FA]"
              ></input>
              <button className=" bg-[#263238] text-white font-medium text-sm py-2 rounded-md px-3">
                Go to meet
              </button>
            </div>
          </div>
          <div className="p-4 flex gap-4">
            <FaFacebook className="text-blue-900 text-5xl"/>
            <FaTwitter className="text-blue-400 text-5xl"/>
            <img src={instagram} alt="instagram"/>
            <FaLinkedin className="text-blue-900 text-5xl"/>
            <IoLogoYoutube className="text-red-600 text-5xl" />
            <FaTiktok className="text-black text-5xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyTask;
