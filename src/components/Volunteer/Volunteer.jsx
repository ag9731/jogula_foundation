import React, { useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";
import "./Volunteer.css";

const Volunteer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_015niaa", // Replace with your EmailJS service ID
        "template_00iqdwk", // Replace with your EmailJS template ID
        e.target,
        "cWgrspUo4bPeXc8ky" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div className="container mx-auto p-4 flex justify-center items-center">
      <div className="flex flex-wrap w-[80%]">
        <div className="w-full md:w-2/3 p-4">
          <h2 className="text-2xl font-bold">Need Your Heartful Help</h2>
          <p className="mt-4">
            The single funds allow you to advise a smaller number of grants on a
            schedule or as desired, to charitable organizations, causes,
            countries, or regions. This flexibility ensures that your
            contributions have a targeted impact, addressing the specific needs
            you are passionate about.
          </p>
          <p className="mt-4">
            Our strategy brings win-win survival techniques to the forefront,
            ensuring proactive and effective support for our causes. We aim to
            foster a new normal that resonates with the values and expectations
            of generation X, and beyond. As we move forward, our approach is
            geared towards implementing streamlined cloud solutions that enhance
            efficiency and reach.
          </p>
          <p className="mt-4">
            In today's digital age, user-generated content plays a crucial role
            in real-time engagement, providing multiple touchpoints for
            offshoring and broadening our outreach. This dynamic interaction
            helps us stay connected with our donors and beneficiaries, ensuring
            transparency and fostering trust.
          </p>
          <p className="mt-4">
            By leveraging modern technology and strategic planning, we can
            create a sustainable model for charitable giving, empowering
            communities and driving positive change across the globe.
          </p>
        </div>
        <div className="w-full md:w-1/3 p-4 bg-gray-100">
          <h2 className="text-xl font-bold mb-4">Become a Volunteer</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
