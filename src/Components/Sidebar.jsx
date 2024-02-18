import React from "react";
import logo from "../assets/images/Vector.png";
import dashboard from "../assets/images/Vector1.png";
import profile from "../assets/images/profile.png";
import task from "../assets/images/Task.png";
import salary from "../assets/images/salary.png";
import event from "../assets/images/event.png";
import time from "../assets/images/time.png";
import reward from "../assets/images/rewards.png";
import benefit from "../assets/images/benefits.png";
import team from "../assets/images/team.png";
import btn from "../assets/images/sidebtn.png";
const Sidebar = () => {
  return (
    <div className="bg-[#263238] w-[17.875rem] py-5 ">
      <div className="p-8">
        <img src={logo} alt="logo" />
      </div>
      <div>
        <div className="px-8 py-3 bg-gradient-to-l from-[#161616] to-[#FF0839]">
          <li className="flex items-center gap-5 text-white text-xl font-medium">
            <img src={dashboard} alt="dashboard" />
            Dashboard
          </li>
        </div>

        <li className="flex items-center px-8 py-3 gap-5 text-white text-xl">
          <img src={profile} alt="profile" />
          Task
        </li>
        <li className="flex items-center px-8 py-3 gap-5 text-white text-xl">
          <img src={task} alt="task" />
          Task
        </li>
        <li className="flex items-center px-8 py-3 gap-5 text-white text-xl">
          <img src={salary} alt="salary" />
          Salary
        </li>
        <li className="flex items-center px-8 py-3 gap-5 text-white text-xl">
          <img src={event} alt="event" />
          Event
        </li>
        <li className="flex items-center px-8 py-3 gap-5 text-white text-xl">
          <img src={time} alt="time" />
          Time
        </li>
        <li className="flex items-center px-8 py-3 gap-5 text-white text-xl">
          <img src={reward} alt="reward" />
          Reward
        </li>
        <li className="flex items-center px-8 py-3 gap-5 text-white text-xl">
          <img src={benefit} alt="benefit" />
          Benefit
        </li>
        <li className="flex items-center px-8 py-3 gap-5 text-white text-xl">
          <img src={team} alt="team" />
          Team
        </li>
      </div>
      <div className="flex justify-center mt-36">
        <button className="text-white text-xl font-normal flex items-center gap-4 bg-[#FF0032] px-12 py-4 rounded-full">
          <img src={btn} alt="btn" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
