import React from "react";
import "../Section2/Section2.css";
import AboutImg from "../../../assets/Images/BannerImages/jogula_ngo_banglore_1.webp";

const Section2 = () => {
  return (
    <>
      <div className="flex w-[90%] mx-auto flex-col gap-16">
        <div className="Section2cards flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row sm:flex-col gap-10 sm:gap-5 md:gap-20 lg:gap-40 justify-center items-center">
          <div className="Sec2Card1">
            <button className="px-16 bg-[#1670c0] py-12 rounded-lg text-white font-bold hover:bg-green-600">
              Join Hands
            </button>
          </div>
          <div className="Sec2Card2">
            <button className="px-16 bg-[#1670c0] py-12 rounded-lg text-white font-bold hover:bg-green-600">
              Get Started
            </button>
          </div>
        </div>

        {/* About jogula foundation*/}
        <div className="flex flex-col-reverse justify-around lg:flex-row xl:flex-row md:flex-row sm:flex-col-reverse align-content-center items-center">
          <div className="desc flex flex-col gap-6 font-semibold text-lg justify-center w-[100%] lg:w-[50%] xl:w-[50%] md:w-[50%] sm:w-[100%]">
            <h1 className="text-3xl font-medium	mt-10 lg:mt-0 xl:mt-0 md:mt-0 sm:mt-10">
              JOGULA NGO
            </h1>
            <p className="text-[#62615C]">
              Jogula NGO Foundation warmly welcomes you. We are a beacon of hope
              for children in need of basic necessities.
            </p>
            <p className="text-[#62615C]">
              Since our inception in 2019-20, we have grown from nurturing a
              mere four children to building a strong family of 30 children
              today.
            </p>
            <p className="text-[#62615C]">
              Our founding members were a group of passionate youngsters who
              came together with a shared goal of empowering children in need to
              become self-reliant and independent as early as possible in life.
            </p>
          </div>
          <div className="imgSection w-50% ">
            <img src={AboutImg} className="rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
