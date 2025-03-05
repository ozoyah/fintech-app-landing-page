import React from "react";
import HeroImg from "../../assets/Group 1.png";
import { LuCircleCheck } from "react-icons/lu";

const Hero = () => {
  return (
    <section className="container mt-16 font-myFont">
      <div className=" container flex flex-col gap-5 md:flex-row">
        <div className="flex flex-col space-y-3 w-11/12">
          <h1 className="text-5xl text-black font-bold leading-[4.5rem]">
            Soudemy can maximize your money flow.
          </h1>
          <p className="text-sm text-black w-9/12">
            you no longer need to go to the bank to do this. Only through this
            platform, all financial activities can be completed
          </p>
          <div
            className="flex items-start gap-3
          "
          >
            <button className="bg-[#FF8100] rounded-full px-3 py-2 font-bold text-xs">
              Get Started
            </button>
            <button className="bg-white border-black border-[1px] rounded-full px-3 py-2 font-bold text-xs">
              Learn more
            </button>
          </div>
          <div className="grid grid-cols-1 text-sm md:w-3/4 md:grid-cols-2">
            <div className="flex gap-1 items-center">
              <LuCircleCheck className="text-green-600" />
              <p>Easily Access any data</p>
            </div>

            <div className="flex gap-1 items-center">
              <LuCircleCheck className="text-green-600" />
              <p>Easily Access any data</p>
            </div>
            <div className="flex gap-1 items-center">
              <LuCircleCheck className="text-green-600" />
              <p>Easily Access any data</p>
            </div>
            <div className="flex gap-1 items-center">
              <LuCircleCheck className="text-green-600" />
              <p>Easily Access any data</p>
            </div>
          </div>
        </div>
        <div>
          <img src={HeroImg} alt="" className="h-5/6"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
