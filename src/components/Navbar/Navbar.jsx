import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import "./Navbar.css";


const Navbar = () => {
  const[showDropdown, setShowDropdown] = useState(false);

  const handleClick = () => {
    setShowDropdown(true);
  }

  const handleClose = () => {
    setShowDropdown(false);
  }

  return (
    // Main
    <div className="flex justify-center items-center bg-[#ECECF9]">
      {/* logo */}
      <div className="flex items-center justify-between w-[95%] ">
        <div>
          <img
            className="w-16 md:w-80 md:min-w-8 sm:w-36 lg:w-32"
            src="/images/jogula_ngo_foundation_logo.png"
            alt=""
          />
        </div>

        {/* Menu */}
        <div className="flex">
          <ul className="uppercase  flex flex-col md:flex-row gap-16 list-none text-black font-semibold">
            <li className="hover:text-[#0e89d1] cursor-pointer">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#0e89d1] cursor-pointer">
              <Link to="/about-us">About</Link>
            </li>
            <li className="hover:text-[#0e89d1] cursor-pointer">Volunteer</li>
            <li className="hover:text-[#0e89d1] cursor-pointer">
              <Link to="/about-us">Activities</Link>
            </li>
            <div
              className="dropdown relative flex items-center gap-2 cursor-pointer"
              onMouseOver={handleClick}
              onMouseLeave={handleClose}
            >
              <div>
                <li className="hover:text-[#0e89d1] cursor-pointer">
                  <Link to="/your-help">Your Help</Link>
                </li>
              </div>
              <div>
                <FaAngleDown />
              </div>

              {showDropdown && (
                <div className="drop absolute top-6 shadow-md bg-white left-0 text-black">
                  <ul className="flex flex-col items-start pt-3 pb-3 pl-3 w-52">
                    <li className="border-b-2 border-blue-500">
                      <Link to="/sponser-education">Sponser Education</Link>
                    </li>
                    <li>
                      <Link to="/sponser-food">Sponser Food</Link>
                      
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <li className="hover:text-[#0e89d1] cursor-pointer">Gallery</li>
            <li className="hover:text-[#0e89d1] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Button */}
        <div>
          <button className="bg-[#1670c0] py-2 px-10 rounded text-white font-bold tracking-wide hover:bg-black hover:border-white">
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
