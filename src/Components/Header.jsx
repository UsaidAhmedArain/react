import React from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
const Header = () => {
  return (
    <div>
      <header className="header flex justify-between items-center p-2 px-7">
        <h1 className="text-white font-bold text-4xl">GD.</h1>
        <div className="flex items-center gap-10">
          <nav className="sm:block hidden">
            <ul className="text-white flex gap-10 font-semibold">
              <li>About</li>
              <li>Services</li>
              <li>Our Work</li>
            </ul>
          </nav>
          <div>
            <button className="primaryBtn sm:block hidden text-white text-base py-3 px-8 font-bold rounded-xl">
              Enroll Now
            </button>
          </div>
          <div className="block md:hidden">
          <HiOutlineBars2 className="cursor-pointer text-4xl font-bold" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
