import React from "react";
import HeroImg from "../../assets/Group 1.png";

const Hero = () => {
  return (
    <section className="container mt-16 font-myFont">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col space-y-4 w-11/12">
          <h1 className="text-6xl text-black font-bold leading-[4.5rem]">
            Soudemy can maximize your money flow
          </h1>
          <p className="text-sm text-black">
            you no longer need to go to the bank to do this. Only through this
            platform, all financial activities can be completed
          </p>
          <div className="flex items-center">
            <button>Get Started</button>
            <button>Learn more</button>
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
