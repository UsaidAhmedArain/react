import React from "react";
import hero from "../assets/images/hero-image 1.png";
const Hero = () => {
  return (
    <div>
      <section className="pt-10 py-10 hero px-8 bg-gradient-to-b from-secondary to-[#057ADA]">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="flex flex-col md:gap-8 gap-8">
            <h1 className="text-4xl text-white font-bold max-w-[24rem]">
              Learn the art of Game Dev
            </h1>
            <p className="text-white text-base max-w-[30rem]">
              This is a comprehensive course on Game Development. You will learn
              everything from generating an idea to publishing your games to
              different platforms.
            </p>
            <div>
              <button className="secondaryBtn py-3 px-8 text-white text-base font-bold rounded-2xl">
                Enroll Now
              </button>
            </div>
          </div>
          <div className="mt-10 flex items-center gap-10">
            <div className="flex flex-col gap-24 md:gap-52">
              <div className="bg-white w-36 flex flex-col text-center rounded-2xl">
                <h1 className="font-bold text-2xl">32K</h1>
                <span className="text-sm">Students Enrolled</span>
              </div>

              <div className="bg-white w-36 flex flex-col text-center rounded-2xl">
                <h1 className="font-bold text-2xl">4.7</h1>
                <span className="text-sm">Overall Rating</span>
              </div>
            </div>
            <div>
              <img src={hero} alt="hero" className=""></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
