import React from "react";
import HomeBannerBg from "../assets/HomeBannerBg.jpg";
import logo from "../assets/logo.png";
import { HiSearch } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <div
        className="relative w-full flex justify-center items-center bg-cover h-96 flex-col"
        style={{ backgroundImage: `url(${HomeBannerBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="text-4xl md:text-5xl text-center mb-10 relative text-white font-light flex items-center flex-wrap md:flex-nowrap justify-center">
          Welcome to <img src={logo} className=" h-30" alt="Logo" />    
        </div>
        <div className="max-w-5xl">
          
        </div>
      </div>
    </>
  );
};

export default Home;
