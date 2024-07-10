import React from "react";
import image11 from "../../assets/Images/Gallery/image6.jpg"

const Activities = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center">
        <img src={image11} alt="Activities" className="w-full max-w-lg" />
      </div>
      <h1 className="text-3xl font-bold mb-4">ACTIVITES</h1>

      <p className="mb-4">
        Our India, a country with 1.2 billion people with growing needs and a
        dependent economy, often finds that government efforts to reach the
        needy can be challenging. We, at Jogula NGO Foundation in Bengaluru, as
        citizens of this nation, can join hands to restore glory and make India
        hunger-free. Our organization takes care of the children, ensuring they
        have a brighter future.
      </p>
      <p className="italic mb-4">
        Jogula NGO Foundation in Bengaluru provides education, food, clothing,
        and shelter to children in need. "Communication is a skill that you can
        learn. It's like riding a bicycle or typing. If you're willing to work
        at it, you can rapidly improve the quality of every part of your life."
        - Brian Tracy While only a lucky few inherit soft skills, it is not
        impossible for others to gain them. Jogula NGO Foundation trains
        aspirants in soft skills for better employability.
      </p>
      <p className="font-bold mb-4">We, at Jogula Foundation</p>
      <ul className="list-decimal list-inside mb-4 space-y-2">
        <li>provide literacy to the illiterate</li>
        <li>
          provide job oriented in house training programs depending up on
          individuals aptitude and interest.
        </li>
        <li>
          encourage pursuit of school and college education upto diploma, degree
          and also post graduate level.
        </li>

        <li>offer counseling services to the mentally disturbed.</li>
        <li>give vocational guidance to the underprivileged.</li>
        <li>Periodical excursions are arranged to educate and entertain.</li>
        <li>
          Trust service to instill self respect and self confidence in order to
          enable the children's to become dignified citizens of the society.
        </li>
        <li>
          Trust aims to shape each and every child's future secured and
          meaningful by providing utmost good individual attention.
        </li>
      </ul>
    </div>
  );
};

export default Activities;
