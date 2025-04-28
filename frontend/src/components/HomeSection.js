// HomeSection.jsx
import React from "react";
import book from "../assets/ebook.png";
import logo from "../assets/logo.png";
const HomeSection = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-400 to-blue-800">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center">
          <img src={logo} alt="MobiusEngine Logo" className="h-8 w-auto" />
          <span className="ml-2 font-bold text-white text-xl">MobiusEngine</span>
        </div>
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">More</a></li>
        </ul>
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-40 py-20">
        {/* Left Text */}
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Land job interviews <span className="text-blue-300">10x faster</span>
          </h1>
          <p className="text-lg mb-6">
            Custom-built resumes that match your goals, keywords, and recruiter expectations.
          </p>
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-200">
            Get Started →
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src={book}
            alt="Hiring Trends E-Book"
            className="w-64 md:w-80 shadow-lg rounded"
          />
          <p className="text-white mt-2 text-sm underline">Download Free E-Book</p>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="bg-white py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-600">
            How we work?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-2">1</div>
            <p className="text-center">Submit Intake Form</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-2">2</div>
            <p className="text-center">We do the search and curation for list of jobs</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-2">3</div>
            <p className="text-center">You approve, we do the tedious part (applying)</p>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="text-3xl font-bold mb-2">4</div>
            <p className="text-center">You get the interviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
