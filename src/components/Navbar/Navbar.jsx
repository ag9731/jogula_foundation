import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAlignJustify, FaXmark } from "react-icons/fa6";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle Menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Drop Down
  const handleClick = () => {
    setShowDropdown(true);
  };

  const handleClose = () => {
    setShowDropdown(false);
  };

  // Close Menu on Link Click
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex justify-center items-center bg-[#ECECF9]">
      <div className="flex menuParent items-center justify-between w-[95%] ">
        <div>
          <img
            className="w-16 md:w-80 md:min-w-8 sm:w-36 lg:w-32"
            src="/images/jogula_ngo_foundation_logo.png"
            alt="Logo"
          />
        </div>

        {/* Menu */}
        <div className={`menuMain ${showMenu ? "active" : ""}`}>
          <ul className="uppercase flex flex-col justify-center xl:flex-row lg:flex-row md:flex-row sm:flex-col gap-6 xl:gap-16 lg:gap-16 md:gap-14 sm:gap-10 list-none text-black font-semibold">
            <li className="hover:text-[#0e89d1] cursor-pointer">
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#0e89d1] cursor-pointer">
              <Link to="/about-us" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li
              className="hover:text-[#0e89d1] cursor-pointer"
              onClick={closeMenu}
            >
              <Link to="/volunteer" onClick={closeMenu}>
                Volunteer
              </Link>
            </li>
            <li className="hover:text-[#0e89d1] cursor-pointer">
              <Link to="/activities" onClick={closeMenu}>
                Activities
              </Link>
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
                <div className="drop absolute top-6 shadow-md bg-white left-[10px] md:left-0 text-black">
                  <ul className="flex flex-col items-start pt-3 pb-3 pl-3 w-52 xl:pt-3 xl:pb-3 xl:pl-3 xl:w-52 sm:w-96">
                    <li className="border-b-2 border-blue-500">
                      <Link to="/sponser-education" onClick={closeMenu}>
                        Sponser Education
                      </Link>
                    </li>
                    <li>
                      <Link to="/sponser-food" onClick={closeMenu}>
                        Sponser Food
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <li
              className="hover:text-[#0e89d1] cursor-pointer"
              onClick={closeMenu}
            >
              <Link to="/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </li>
            <li
              className="hover:text-[#0e89d1] cursor-pointer"
              onClick={closeMenu}
            >
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Button */}
        <div>
          <button className="bg-[#1670c0] py-2 px-10 rounded text-white font-bold tracking-wide hover:bg-black hover:border-white">
            <Link to="/sponser-education" onClick={closeMenu}>
              DONATE
            </Link>
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="mobileIcons" onClick={toggleMenu}>
          {showMenu ? <FaXmark /> : <FaAlignJustify />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
