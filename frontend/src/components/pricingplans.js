// PricingPlans.jsx
import React from "react";

const plans = [
  {
    title: "April Promo",
    price: "$35",
    duration: "/week",
    features: [
      "Curated jobs from 100+ targets, updated 2x/week",
      "Up to 20 human-applied roles per week (5 job titles) — first pass!",
      "Need more? Add extra apps for $2 each",
      "Customized application strategy",
      "Personalized with up to 10 filters (5 job titles)"
    ],
    popular: false,
  },
  {
    title: "Starter",
    price: "$50",
    duration: "/week",
    features: [
      "All the perks of the Promo Plan, plus:",
      "Resume review & story-focused Redraft",
      "Dedicated search specialist",
      "Extra apps at $1.5 each",
      "Award support within office hours (SLA/5FT hours)"
    ],
    popular: true,
  },
  {
    title: "Plus",
    price: "$100",
    duration: "/week",
    features: [
      "Everything in Starter with more muscle:",
      "Up to 75 apps/week",
      "Apply to 15 job titles",
      "A real full application team on Pacific hours"
    ],
    popular: false,
  },
];

const advancePlan = {
  title: "Advance",
  price: "$150",
  duration: "/week",
  description: "Top-tier support for serious job hunters",
  features: [
    "Everything in Plus",
    "Custom Resumes & Cover Letters",
    "20 fully customized applications/week",
    "Help with complex job searches",
    "Access to senior resume experts, Founders & Exec Coaches"
  ]
};

const PricingPlans = () => {
  return (
    <div className="w-full py-16 px-8 md:px-20 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-12">Job Application Service Plans</h2>

      {/* Top Plans */}
      <div className="flex flex-wrap justify-center gap-8 mb-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`w-72 border rounded-lg p-6 shadow-md relative ${
              plan.popular ? "border-blue-600" : "border-gray-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                Popular
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-lg font-normal">{plan.duration}</span>
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

      {/* Advance Plan */}
      <div className="bg-blue-600 text-white rounded-lg mx-32 p-8">
        <h3 className="text-2xl font-bold mb-2">{advancePlan.title}</h3>
        <p className="text-sm mb-4">{advancePlan.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-4 mb-6">
          {advancePlan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              🔵 {feature}
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold">
            {advancePlan.price}
            <span className="text-lg font-normal">{advancePlan.duration}</span>
          </p>
          <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-blue-50">
            Get Started ➔
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
