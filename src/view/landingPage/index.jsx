import React from "react";

import HeroSection from "./HeroSection";
import SoftwareSection from "./SoftwareSection";
import ProcessSection from "./ProcessSection";
import NextLevelSection from "./NextLevelSection";
import BuiltNowSection from "./BuiltNowSection";
import OfferedSection from "./OfferedSection";
import WhyChooseUs from "./WhyChooseUs";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <SoftwareSection />
      <ProcessSection />
      <NextLevelSection />
      <BuiltNowSection />
      <OfferedSection />
      <WhyChooseUs />
    </div>
  );
};

export default Landing;
