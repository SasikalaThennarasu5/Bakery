// src/pages/About.jsx
import React from "react";
import AboutUs from "../components/AboutUs"; // <-- adjust the path
import OurStory from "../components/OurStory";
import WhyChooseUs from "../components/WhyChooseUs";
import VisitUs from "../components/VisitUs";

const About = () => {
  return (
    <div>
      <AboutUs />
      <OurStory />
      <WhyChooseUs />
      <VisitUs />
    </div>
  );
};

export default About;
