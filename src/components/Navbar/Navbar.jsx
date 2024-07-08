import React from 'react'

const Navbar = () => {
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
            <li className="hover:text-[#0e89d1] cursor-pointer">Home</li>
            <li className="hover:text-[#0e89d1] cursor-pointer">About</li>
            <li className="hover:text-[#0e89d1] cursor-pointer">Volunteer</li>
            <li className="hover:text-[#0e89d1] cursor-pointer">Activities</li>
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
