// ResumeCoachingPlans.jsx
import React from "react";

const coachingPlans = [
  {
    title: "Resume Rebuild",
    price: "$1000",
    duration: "one time",
    features: [
      "3×30-min coaching",
      "Focused on storytelling, not just formatting",
      "Analysis + full application team on Pacific hours",
      "Tailored to your target industry, company or role",
      "Direct work with our co-founder (ex-JP Morgan)",
      "Executive coaching from UC Berkeley alum with 20+ yrs experience",
      "Resume Rebuild portfolio available upon request"
    ]
  },
  {
    title: "Interview Prep",
    price: "$500",
    duration: "one time",
    features: [
      "2×45-min live coaching with our co-founder",
      "Real-time practical feedback",
      "Build clarity, empathy & executive presence",
      "For senior and leadership roles — technical & non-technical"
    ]
  }
];

const ResumeCoachingPlans = () => {
  return (
    <div className="w-full py-16 px-8 md:px-20 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-12">Resume Building & Coaching</h2>
      <p className="text-center text-gray-600 mb-10">
        Let's talk about where you're headed — and how your resume can get you there.
        <br />
        Schedule a call to get started.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {coachingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-72 border rounded-lg p-6 shadow-md border-gray-300"
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-lg font-normal"> {plan.duration}</span>
            </p>

            {/* Features */}
            <ul className="text-sm mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <button className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700">
              Get Started ➔
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeCoachingPlans;
