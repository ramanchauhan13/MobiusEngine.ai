import React from "react";
import AboutUs from "./components/about";
import Testimonials from "./components/testimonial";
import WhyChooseUs from "./components/whychooseus";
import ResumeCoachingPlans from "./components/resumecoachingplans";
import PricingPlans from "./components/pricingplans";
import ContactUsSection from "./components/contactussection";
import Footer from "./components/footer";
import HomeSection from "./components/HomeSection";

function App() {
  return (
    <>
    <HomeSection/>
    <AboutUs/>
    <Testimonials/>
    <WhyChooseUs />
    <PricingPlans/>
    <ResumeCoachingPlans/>
    <ContactUsSection />
    <Footer/>
    </>
  );
}

export default App;
