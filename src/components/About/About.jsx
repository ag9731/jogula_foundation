import React from "react";
import AboutUsBanner from "../../assets/Images/About_Us/AboutUsNew.webp";
import Section2 from "../../assets/Images/About_Us/JOGULA_N_1.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="main">
        <div className="flex flex-1">
          <div className="grid grid-cols-2 w-full">
            <div className="AboutSec1Head flex justify-center items-center bg-[#83573c]">
              <h1 className="text-white text-6xl">ABOUT US</h1>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="w-full h-auto"
                src={AboutUsBanner}
                alt="About Us"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section2 */}

      <div className=" flex justify-center items-center mt-16">
        <div className="flex flex-1 w-[90%] gap-10 justify-center">
          <div className="imgSection w-50%">
            <img src={Section2} className="rounded-lg" alt="" />
          </div>
          <div className="desc flex flex-col gap-6 font-semibold text-lg justify-center w-[50%]">
            <h1 className="text-3xl font-medium">JOGULA NGO FOUNDATION</h1>
            <p className="text-[#62615C]">
              Jogula NGO Foundation is a non-profit organization dedicated to
              improving the lives of children in need across India. Our
              organization was founded in 2019 -20 with a mission to provide
              access to basic necessities, education, and healthcare services to
              children who need it the most.
            </p>
            <p className="text-[#62615C]">
              Since our inception, we have been working tirelessly to create a
              positive impact on the lives of children in need. We provide
              comprehensive child care services, including access to nutritious
              food, safe and comfortable living conditions, quality education,
              and healthcare services. We also provide emotional and
              psychological support to children who have experienced trauma or
              loss.
            </p>
            <p className="text-[#62615C]">
              At Jogula, we believe that every child deserves a chance to
              succeed and reach their full potential. We strive to provide a
              nurturing and supportive environment where children can feel safe,
              loved, and cared for. Our team of caregivers, teachers, and
              counselors are dedicated to creating a family-like atmosphere
              where children can thrive and grow.
            </p>
            <p className="text-[#62615C]">
              Our organization relies on the generosity of donors to continue
              providing vital services to children in need. We are grateful to
              all of our supporters who share our commitment to improving the
              lives of children in need.
            </p>
            <p className="text-[#62615C]">
              If you would like to learn more about Jogula NGO Foundation and
              our work, please visit our website or contact us directly.
            </p>
          </div>
        </div>
      </div>

      {/* Section3 */}
      <div className=" flex justify-center items-center mt-6">
        <div className="flex flex-col  w-[80%]  gap-10 justify-center">
          <div>
            <h1 className="text-3xl font-bold">About the Founders</h1>
          </div>
          <div className="flex flex-col gap-3 font-medium text-lg">
            <p className="text-[#000] text-justify">
              Harini, Meena, and Hanumanatharaya are the dedicated founders and
              trustees of Jogula NGO Child Foundation. Together, they work
              tirelessly to improve the lives of underprivileged children in
              their community.
            </p>
            <p className="text-[#000] text-justify">
              Harini is a passionate and driven individual who started Jogula
              NGO Child Foundation with the vision of creating a better future
              for children in need. Her commitment to the cause is evident in
              her tireless efforts to fundraise, manage operations, and build
              partnerships to support the organization’s mission.
            </p>
            <p className="text-[#000] text-justify">
              Meena is a dedicated and enthusiastic trustee who brings a wealth
              of experience and expertise to the organization. Her skills in
              finance, administration, and project management have been
              invaluable in helping Jogula NGO Child Foundation grow and expand
              its impact over the years.
            </p>
            <p className="text-[#000] text-justify">
              Hanumanatharaya is a compassionate and empathetic trustee who is
              deeply committed to making a positive difference in the lives of
              children. He plays a key role in driving the organization’s
              programs and initiatives, ensuring that the needs of the children
              are always at the forefront.
            </p>
            <p className="text-[#000] text-justify">
              Together, Harini, Meena, and Hanumanatharaya are a formidable team
              of individuals who are deeply committed to creating a brighter
              future for children in need. Their tireless efforts and unwavering
              dedication are an inspiration to all who know them, and they
              continue to make a positive impact on the lives of countless
              children through their work with Jogula NGO Child Foundation.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className=" flex justify-center items-center mt-6 py-4">
        <div className="flex justify-between items-center  w-[80%] py-10 px-10 gap-10 bg-[#1670c0]">
          <div>
            <h1 className="text-3xl font-medium text-white">PLEASE RAISE YOUR HAND</h1>
            <p className="font-bold">“You must be tile change You want to see in the world.”</p>
          </div>
          <div>
            <button className="bg-[#fff] px-8 py-3 font-bold rounded-md">Donate Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
