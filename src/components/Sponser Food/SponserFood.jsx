import React from "react";
import sponser_food from "../../assets/Images/BannerImages/sponser_food.jpeg";
import { Link } from "react-router-dom";

const SponserFood = () => {
  return (
    <div className="sponserfood flex flex-col gap-14">
      <div className="h-40 px-4 md:px-20 flex flex-col justify-center gap-5 items-start bg-slate-950">
        <h1 className="text-white font-bold text-3xl">SPONSER FOOD</h1>
        <button className="bg-white py-2 px-5">Donate Now</button>
      </div>

      {/* Sponser Food */}
      <div className="sponserFoodMain flex justify-center px-4 md:px-0">
        <div className="w-full md:w-[80%] flex flex-col gap-5">
          <div className="flex flex-col gap-5 text-xl md:text-2xl">
            <p>
              Sponsoring food for the children is an excellent way to make a
              direct impact on the lives of underprivileged children. Donors and
              sponsors can choose to sponsor a specific meal.
            </p>
            <p>
              Remember, every contribution can make a significant difference in
              the lives of these children.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="shadow-lg h-[40vh]">
                <img
                  src={sponser_food}
                  alt="Sponsor Food"
                  className="w-full h-auto"
                />
              </div>
              <div className="shadow-lg h-[40vh] flex items-center gap-5 justify-center flex-col p-4">
                <h1 className="text-xl md:text-2xl font-bold">BREAKFAST</h1>
                <button className="bg-slate-900 text-white py-2 px-5">
                  <Link to="/sponser-education" >
                    DONATE
                  </Link>
                  DONATE INR 1000
                </button>
              </div>
              <div className="shadow-lg h-[40vh] flex items-center gap-5 justify-center flex-col p-4">
                <h1 className="text-xl md:text-2xl font-bold">LUNCH</h1>
                <button className="bg-slate-900 text-white py-2 px-5">
                  <Link to="/sponser-education" >
                    DONATE INR 1700
                  </Link>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
              <div className="shadow-lg h-[40vh] flex items-center gap-5 justify-center flex-col p-4">
                <h1 className="text-xl md:text-2xl font-bold">HOLIGE FOOD</h1>
                <button className="bg-slate-900 text-white py-2 px-5">
                  <Link to="/sponser-education">
                    DONATE INR 2200
                  </Link>
                </button>
              </div>
              <div className="shadow-lg flex items-center h-[40vh] gap-5 justify-center flex-col p-4">
                <h1 className="text-xl md:text-2xl font-bold">NONVEG FOOD</h1>
                <button className="bg-slate-900 text-white py-2 px-5">
                  <Link to="/sponser-education" >
                    DONATE INR 3000
                  </Link>
                </button>
              </div>
              <div className="shadow-lg flex items-center gap-5  h-[40vh] justify-center flex-col p-4">
                <h1 className="text-xl md:text-2xl font-bold">FULL DAY FOOD</h1>
                <button className="bg-slate-900 text-white py-2 px-5">
                  <Link to="/sponser-education" >
                    DONATE INR 4800
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponserFood;
