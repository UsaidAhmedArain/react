import React from "react";
import employee from "../assets/images/employee.png";
import dollar from "../assets/images/dollar.png";
import clock from "../assets/images/clock.png";
import suitcase from "../assets/images/suitcase.png";
import calendar from "../assets/images/calendar.png";
import ellipse from "../assets/images/Ellipse 101.png"
const Rewards = () => {
  return (
    <div>
      <div className="px-6 mt-5 flex gap-4">
        <div className="bg-white w-[33%] shadow-md rounded-lg">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-medium text-[#2D2B2B]">My Rewards</h1>
            <div>
              <span className="text-[#7B7B7B] text-base">View All</span>
            </div>
          </div>
          <div className="bg-[#F9F9F9] py-5  px-2">
            <div className="flex justify-between items-center">
              <img src={employee} className="h-7" alt="employee" />
              <div className="flex mr-20 flex-col">
                <span className="font-medium text-base text-[#2D2B2B]">
                  Employee of the month
                </span>
                <span className="font-medium text-base text-[#2D2B2B]">
                  June2023
                </span>
              </div>
              <div>
                <span className="font-semibold  text-xl text-[#13CD7F]">
                  $280
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white py-5  px-2">
            <div className="flex justify-between items-center">
              <img src={dollar} className="h-7" alt="dollar" />
              <div className="flex mr-32 flex-col">
                <span className="font-medium text-base text-[#2D2B2B]">
                  Extra Work
                </span>
                <span className="font-medium text-base text-[#2D2B2B]">
                  3:21:03 hours
                </span>
              </div>
              <div>
                <span className="font-semibold  text-xl text-[#13CD7F]">
                  $5.37
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#F9F9F9] py-5  px-2">
            <div className="flex justify-between items-center">
              <img src={dollar} className="h-7" alt="dollar" />
              <div className="flex mr-32 flex-col">
                <span className="font-medium text-base text-[#2D2B2B]">
                  Extra Work
                </span>
                <span className="font-medium text-base text-[#2D2B2B]">
                  3:21:03 hours
                </span>
              </div>
              <div>
                <span className="font-semibold  text-xl text-[#13CD7F]">
                  $77.37{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[33%] shadow-md rounded-lg">
          <div className="flex items-center justify-between p-6">
            <h1 className="text-2xl font-medium text-[#2D2B2B]">Drawbacks</h1>
            <div>
              <span className="text-[#7B7B7B] text-base">View All</span>
            </div>
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-[#F9F9F9] text-left">
                <th className="p-6 font-medium text-[#2D2B2B] text-sm">Name</th>
                <th className="p-6 font-medium text-sm text-[#2D2B2B]">Date</th>
                <th className="p-6 font-medium text-sm text-[#2D2B2B]">
                  Payment
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border-b">
                <td className="py-5 flex items-center font-normal ml-4 text-center text-base  gap-1">
                  <img src={clock} alt="clock" />
                  Late Meeting
                </td>
                <td className="py-5 font-normal text-base text-center">
                  07 Aug 2022
                </td>
                <td className="py-5 text-base font-normal text-center text-[#FF0032]">
                  -$23.11
                </td>
              </tr>

              <tr className="border-b">
                <td className="py-5 flex items-center font-normal ml-4 text-center text-base  gap-1">
                  <img src={calendar} alt="clock" />
                  Missed Day
                </td>
                <td className="py-5 font-normal text-base text-center">
                  07 Aug 2022
                </td>
                <td className="text-base font-normal text-center text-[#FF0032]">
                  -$23.11
                </td>
              </tr>
              <tr className="">
                <td className="py-5 flex items-center font-normal ml-4 text-center text-base  gap-1">
                  <img src={suitcase} alt="clock" />
                  No Work
                </td>
                <td className="py-5 font-normal text-base text-center">
                  07 Aug 2022
                </td>
                <td className="py-5 text-base font-normal text-center text-[#FF0032]">
                  -$23.11
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white w-[33%] shadow-md rounded-lg p-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-medium text-[#2D2B2B]">Events</h1>
            <div>
              <span className="text-[#7B7B7B] text-base">View All</span>
            </div>
          </div>
          <div className="bg-[#263238] py-2 px-3 mt-5 border-l-8 border-[#FF0032] rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-base text-[#FFFFFF]">Team Meeting</h1>
                  <span className="text-sm font-normal text-[#FFFFFF]">9:00AM - 10:00 AM</span>
                </div>
                <div>
                  <img src={ellipse} alt="ellipse" />
                </div>
              </div>
          </div>
          
          <div className="bg-[#263238] py-2 px-3 mt-5 border-l-8 border-[#FF0032] rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-base text-[#FFFFFF]">Team Meeting</h1>
                  <span className="text-sm font-normal text-[#FFFFFF]">9:00AM - 10:00 AM</span>
                </div>
                <div>
                  <img src={ellipse} alt="ellipse" />
                </div>
              </div>
          </div>
          
          <div className="bg-[#263238] py-2 px-3 mt-5 border-l-8 border-[#FF0032] rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="font-bold text-base text-[#FFFFFF]">Team Meeting</h1>
                  <span className="text-sm font-normal text-[#FFFFFF]">9:00AM - 10:00 AM</span>
                </div>
                <div>
                  <img src={ellipse} alt="ellipse" />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
