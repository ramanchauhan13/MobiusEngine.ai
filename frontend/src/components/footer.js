import React from 'react';
import logoPlaceholder from '../assets/logoFooter.png';
import shape from '../assets/Shape.png';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
        
        {/* Logo */}
        <div className="mb-8 md:mb-0">
          <img src={logoPlaceholder} alt="MobiusEngine Logo" className="w-40 mb-4" />
        </div>

      </div>
      
      {/* Contact Details */}
      <div className="flex flex-col md:flex-row gap-16 text-sm px-16 pt-8 text-blue-600">
          <div>
            <h5 className="text-blue-600 font-semibold mb-2">Address</h5>
            <p>
              1976 Mission St Ste 103 #450<br />
              San Francisco, CA 94103
            </p>
          </div>

          <div>
            <h5 className="text-blue-600 font-semibold mb-2">Email</h5>
            <p>
              <a href="mailto:finance@mobiusengine.ai" className="text-blue-600 hover:underline">
                finance@mobiusengine.ai
              </a>
            </p>
          </div>

          <div>
            <h5 className="text-blue-600 font-semibold mb-2">Telephone</h5>
            <p>
              <a href="tel:6508896026" className="text-blue-600 hover:underline">
                650-889-6026
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div>
            <h5 className="text-blue-600 font-semibold mb-2">Socials</h5>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn">
                <img src={shape} alt="LinkedIn Icon" className="w-6 h-6" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={shape} alt="LinkedIn Icon" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

      {/* Bottom bar */}
      <div className="bg-blue-600 text-white text-xs mt-10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <span>© 2023 Mobiusservices LLC.</span>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
