import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Section1/Section1.css"
import bannerImage1 from "../../..//assets/Images/BannerImages/Banner_Images_1.webp"
import bannerImage2 from "../../..//assets/Images/BannerImages/Banner_Images_2.webp"
import bannerImage3 from "../../..//assets/Images/BannerImages/Banner_Images_3.webp"
import bannerImage4 from "../../..//assets/Images/BannerImages/Banner_Images_4.webp"

const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const spanStyle = {
    padding: "20px",
    background: "#efefef",
    color: "#000000",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "60vh",
  };
  const slideImages = [
    {
      url: bannerImage1,
    },
    {
      url: bannerImage2,
    },
    {
      url: bannerImage3,
    },
    {
      url: bannerImage4,
    },
  ];

  const handlSlideChange = (previous, next) => {
    setCurrentSlide(next);
  };

  return (
    <div className="slide-container">
      <Fade onChange={handlSlideChange}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
            </div>
          </div>
        ))}
      </Fade>
      <div className="dot-container">
        {slideImages.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "dot active" : "dot"}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Section1;
