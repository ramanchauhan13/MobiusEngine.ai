// AboutUs.jsx
import React from "react";
import ashwin from "../assets/ashwin.png"; // Adjust the path as necessary
import nicole from "../assets/nichole.png"; // Adjust the path as necessary
import shape from "../assets/Shape.png"; // Adjust the path as necessary

const teamMembers = [
  {
    name: "Ashwin",
    description: `Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.

Ashwin’s vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.`,
    image: ashwin, // Add your correct path
    linkedin: "#",
  },
  {
    name: "Nicole",
    description: `Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.

With a B.S in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning helps careers. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.`,
    image: nicole, // Add your correct path
    linkedin: "#",
  },
];

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-900 to-black text-white px-8 md:px-48 py-16">
      <h2 className="text-3xl font-bold mb-12">About Us</h2>

      <div className="space-y-16">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Picture */}
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover"
              />
              {/* LinkedIn Icon */}
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <div className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg">
                  <img src={shape} alt="LinkedIn" className="w-5 h-5" />
                </div>
              </a>
            </div>

            {/* Description */}
            <div className="max-w-3xl">
              <p className="text-lg font-semibold mb-2">{member.name}</p>
              <p className="text-sm whitespace-pre-line">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Link */}
      <div className="mt-16 text-center">
        <p className="text-sm">Learn more about our Board of Advisors ➔</p>
        <a
          href="https://linkedin.com" // Replace with actual LinkedIn link
          className="text-blue-400 underline mt-2 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow us on our LinkedIn page
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
