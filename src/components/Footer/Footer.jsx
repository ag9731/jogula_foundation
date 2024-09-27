import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleExploreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page
  };
  return (
    <div className="main bg-gray-800 text-white p-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold mb-4">About Us</h1>
          <p className="text-center md:text-left">
            Jogula NGO Foundation warmly welcomes you. We are a beacon of hope
            for children in need of basic necessities.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold mb-4">Quick Links</h1>
          <ul className="text-center md:text-left">
            <li className="mb-2">
              <Link to="/" onClick={handleExploreClick}>
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about-us" onClick={handleExploreClick}>
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/volunteer" onClick={handleExploreClick}>
                Volunteer
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" onClick={handleExploreClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold mb-4">Get In Touch</h1>
          <p className="mb-2 text-center md:text-left">
            <span className="font-bold">Phone:</span> +91 9611295969
          </p>
          <p className="mb-2 text-center md:text-left">
            <span className="font-bold">Email:</span> jogulafoundation@gmail.com
          </p>
          <p className="text-center md:text-left">
            <span className="font-bold">Address:</span> #30, 3rd Cross,
            Thulasinagar, Hosahalli Main Road, Doddagollarahatti, Magadi Road,
            Bengaluru - 560091
          </p>
        </div>
      </div>
      <div className="text-center">
        <p>
          <a className="text-red-600 bg-black" href="https://www.innomatricstech.com/">
            Powered By{" "}
            <span className="text-white">Innomatrics Tech Banglore</span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
