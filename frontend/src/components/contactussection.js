import React from 'react';

const ContactUsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center  bg-white text-center p-8">
      {/* Contact Us Button */}
      <div className="bg-blue-600 text-white rounded-xl p-20 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl">
        <div className="text-lg font-light">STILL HAVE DOUBTS?</div>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">Contact us</span>
          <div className="bg-white text-blue-600 p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
