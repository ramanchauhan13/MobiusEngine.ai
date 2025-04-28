// WhyChooseUs.jsx
import React from "react";
import star from "../assets/star.png";
import vector from "../assets/vector.png";
import layer from "../assets/layer.png";

const features = [
  {
    title: "Tried, Tested, Trusted",
    description: "Built by folks with 40+ years in tech and big tech, we've seen the game, and we've got your back.",
    image: layer,
  },
  {
    title: "Real People, Real Help",
    description: "A hands-on team that actually cares — guiding you through every twist in your career path!",
    image: vector,
  },
  {
    title: "Beat    the Line",
    description: "We search, shortlist, and apply for you for better matches — sharp-fit in a strategic slope.",
    image: star,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full text-blue-600 py-16 px-8 md:px-20">
        <div className="rounded-2xl mx-28 px-4 py-8 bg-blue-50 ">
      <h2 className="text-[40px]  mb-12">Why Choose Us?</h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {features.map((feature, index) => (
          <div key={index} className="w-72 border rounded-lg bg-white p-6 text-center shadow-sm">
            <img src={feature.image} alt="img" className="h-[20%] text-4xl mb-4"></img>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
