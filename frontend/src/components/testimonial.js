// Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "Holly",
    description: "Holly is a senior executive who got over 10 job interviews and an offer she accepted.",
    videoLink: "#",
  },
  {
    name: "Holly",
    description: "Holly is a senior executive who got over 10 job interviews and an offer she accepted.",
    videoLink: "#",
  },
  {
    name: "Holly",
    description: "Holly is a senior executive who got over 10 job interviews and an offer she accepted.",
    videoLink: "#",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full py-16 px-8 md:px-20 bg-white text-black">
      <h2 className="text-3xl pl-32 text-blue-600 mb-12">What our clients have to say</h2>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-72 border rounded-lg overflow-hidden shadow-md">
            <div className="h-40 flex items-center justify-center bg-gray-100">
              {/* Play button placeholder */}
              <button className="text-4xl text-blue-500">▶️</button>
            </div>
            <div className="bg-blue-600 p-4 text-white text-sm">
              {testimonial.description}
              <div className="flex justify-end mt-2">
                <a href={testimonial.videoLink} className="text-white text-2xl">➔</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-center mt-12 gap-4">
        <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50">
          More customer testimonials ➔
        </button>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
          Get Started ➔
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
