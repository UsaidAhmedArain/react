import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
const InvitationNav = () => {
  return (
    <>
      <header className="mt-4 px-5 flex justify-between items-center">
        <div className="flex items-center gap-16">
          <div>
            <img
              src="https://invitation.codes/img/brand/logo_blk_col.svg"
              height={180}
              width={180}
              alt="logo"
            />
          </div>
          <nav>
            <ul className="flex gap-8">
              <li className="cursor-pointer font-bold text-base">Features</li>
              <li className="cursor-pointer font-bold text-base flex items-center gap-2">
                Deals <FaChevronDown />
              </li>
              <li className="cursor-pointer font-bold text-base flex items-center gap-2">
                People <FaChevronDown />
              </li>
              <li className="cursor-pointer font-bold text-base">Extension</li>
            </ul>
          </nav>
        </div>
        <div className="flex gap-12 items-center">
          <div className="flex gap-8 items-center">
            <div className="bg-gray-100 h-10 flex items-center justify-center rounded-full w-10">
              <IoIosSearch className="text-2xl font-extrabold" />
            </div>
            <div>
              <div className="bg-gradient-to-tr from-[#FF1E5B] to-[#EE17D5] h-9 flex items-center justify-center rounded-full w-10">
                <FaPlus className="text-xl text-white font-extrabold" />
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#363636] text-white uppercase py-1 text-sm px-2 font-bold">
              create account
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default InvitationNav;
