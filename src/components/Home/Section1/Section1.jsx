import React, { useState, useEffect } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "../Section1/Section1.css";
import bannerImage1 from "../../..//assets/Images/BannerImages/Banner_Images_1.webp";
import bannerImage2 from "../../..//assets/Images/BannerImages/Banner_Images_2.webp";
import bannerImage3 from "../../..//assets/Images/BannerImages/Banner_Images_3.webp";
import bannerImage4 from "../../..//assets/Images/BannerImages/Banner_Images_4.webp";

const Section1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // State to store the current viewport width
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Function to update viewport width state on resize
  const updateViewportWidth = () => {
    setViewportWidth(window.innerWidth);
  };

  // Effect to add event listener on component mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("resize", updateViewportWidth);
    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  // Calculate height based on viewport width
  let heightStyle = "60vh";
  if (viewportWidth <= 800) {
    heightStyle = "25vh";
  }

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: heightStyle,
  };

  const slideImages = [
    { url: bannerImage1 },
    { url: bannerImage2 },
    { url: bannerImage3 },
    { url: bannerImage4 },
  ];

  const handleSlideChange = (previous, next) => {
    setCurrentSlide(next);
  };

  return (
    <div className="slide-container">
      <Fade onChange={handleSlideChange}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            ></div>
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
