import React from "react";
import logo from "../assets/images/logo.png";
import background from "../assets/images/Background-image.svg";
const NewTask = () => {
  return (
    <div>
      <header className="bg-[#F4F9FE] border-t-4 drop-shadow-[#EEF2F7]  border-[#309BE8] border-b-4 flex justify-between items-center p-4">
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <img src={logo} alt="logo" width={40} height={40} />
          <h1 className="uppercase font-black text-xl">codalytix</h1>
        </div>
        <div className=" gap-10 hidden md:flex">
          <h1 className="text-xl font-medium">Help and Support</h1>
          <h1 className="text-xl font-medium">Why Codalytix</h1>
        </div>
      </header>
      <main className="bg-[#F2F6FB]">
        <div className="flex items-start  justify-between">
          <div className="flex  flex-col mt-10 gap-6 pl-10 md:pl-20">
            <div className="">
              <span className="bg-[#BBB7CF] p-1 text-4xl font-black rounded-lg">
                Revolutionize{" "}
              </span>
              <span className="text-4xl ml-2 font-black">Your</span>
              <div className="mt-6">
                <span className="text-4xl font-black">Software</span>{" "}
                <span className="bg-[#BBB7CF] p-1 ml-2 text-4xl font-black rounded-lg">
                  Engineering
                </span>
              </div>
              <h1 className="text-4xl font-black mt-6">Experience</h1>
            </div>
            <div>
              <p className="text-2xl text-[##1B1B1C]">
                Unlock the full potential of your software
              </p>
              <p className="text-2xl text-[#2E2F30]">
                engineering teams with Codalytix.io
              </p>
            </div>
            <div>
              <p className="text-[#343636] font-semibold text-2xl">
                Where Engineering meets Analytics
              </p>
            </div>
            <button className="bg-[#93A4E8] w-[100%] py-4 text-base text-[#485576] font-bold">
              Get Started
            </button>
          </div>
          <div className="mt-10 hidden md:block">
            <img
              src={background}
              alt="background"
              className="h-[520px] w-[600px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewTask;
