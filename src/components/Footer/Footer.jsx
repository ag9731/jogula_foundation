import React from "react";

const Footer = () => {
  return (
    <div className="main bg-gray-800 text-white p-8 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold mb-4">About Us</h1>
          <p className="text-center md:text-left">
            Jpgula NGO Foundation warmly welcomes you. We are a beacon of hope
            for children in need of basic necessities.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold mb-4">Quick Links</h1>
          <ul className="text-center md:text-left">
            <li className="mb-2">HOME</li>
            <li className="mb-2">ABOUT</li>
            <li className="mb-2">VOLUNTEER</li>
            <li className="mb-2">CONTACT</li>
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
            <span className="font-bold">Address:</span> No.32/2
            Doddabhidrakallu,Near Gurushree School, Nagasandra, Bangalore 560073
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
