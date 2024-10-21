import React from "react";

import HeroSection from "./HeroSection";
import SoftwareSection from "./SoftwareSection";
import ProcessSection from "./ProcessSection";
import NextLevelSection from "./NextLevelSection";
import BuiltNowSection from "./BuiltNowSection";

const Landing = () => {
  return (
    <div>
      <HeroSection />
      <SoftwareSection />
      <ProcessSection />
      <NextLevelSection />
      <BuiltNowSection />
    </div>
  );
};

export default Landing;
