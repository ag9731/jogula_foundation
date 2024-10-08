import React from "react";
import image1 from "../../assets/Images/Gallery/image1.jpg";
import image2 from "../../assets/Images/Gallery/image2.jpg";
import image3 from "../../assets/Images/Gallery/image3.jpg";
import image4 from "../../assets/Images/Gallery/image4.jpg";
import image5 from "../../assets/Images/Gallery/image5.jpg";
import image6 from "../../assets/Images/Gallery/image6.jpg";
import image7 from "../../assets/Images/Gallery/image7.jpg";
import image8 from "../../assets/Images/Gallery/image8.jpg";
import image9 from "../../assets/Images/Gallery/image13.jpg";
import image10 from "../../assets/Images/Gallery/image14.png";
import image11 from "../../assets/Images/Gallery/image15.jpg";
import image12 from "../../assets/Images/Gallery/image16.webp";
import image13 from "../../assets/Images/Gallery/image17.jpg";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported
import { Link } from "react-router-dom";

const Gallery = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
