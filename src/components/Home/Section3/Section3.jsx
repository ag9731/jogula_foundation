import React from "react";
import "./Section3.css";
import jogulaNGO1 from "../../../assets/Images/BannerImages/jogula_ngo_banglore_11.webp";
import jogulaNGO2 from "../../../assets/Images/BannerImages/jogula_ngo_banglore_12.webp";
import jogulaNGO3 from "../../../assets/Images/BannerImages/jogula_ngo_banglore_13.webp";
import jogulaNGO4 from "../../../assets/Images/BannerImages/jogula_ngo_banglore_14.webp";

const Section3 = () => {
  const array = [
    {
      img: jogulaNGO1,
      title: "Our Vision",
      desc: "Our vision is to create a society where every child has access to basic necessities, care, and protection, regardless of their background or circumstances.",
    },
    {
      img: jogulaNGO2,
      title: "Our Mission",
      desc: "Our mission is to provide access to basic necessities such as food, shelter, clothing, education, and healthcare to  children in need across India.",
    },
    {
      img: jogulaNGO3,
      title: "Our Child Care",
      desc: "We, at Jogula Foundation, understand that every child’s needs are unique, and we strive to provide personalized care and support to each child we serve.",
    },
    {
      img: jogulaNGO4,
      title: "Your Help",
      desc: "Every donation, no matter how small, can make a significant impact on the lives of the children we serve. Support our mission by making a donation today",
    },
  ];
  return (
    <>
      <div className="Section3main">
        <div className="Section3Child">
          {array.map((items, index) => (
            <>
              <div className="flex flex-col gap-6">
                <div key={index} className="imgSection">
                  <img
                    className=" border-4
              border-[#E2E2E2]-600"
                    src={items.img}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-center">
                    {items.title}
                  </h2>
                  <p>{items.desc}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section3;
