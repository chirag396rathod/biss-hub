import React from "react";
import { SoftwareSectionContainer } from "./styled";

import Logo1 from "../../assets/1.svg";
import Logo2 from "../../assets/2.svg";
import Logo3 from "../../assets/_2.svg";
import Logo4 from "../../assets/3.svg";
import Logo5 from "../../assets/4.svg";
import Logo6 from "../../assets/5.svg";

const SoftwareSection = () => {
  return (
    <SoftwareSectionContainer>
      <div className="container">
        <div className="section-title">
          Over 32k+ software businesses growing with AR Shakir
        </div>
        <div className="logo-list">
          <div className="logo-container">
            <img src={Logo1} alt="Logo1" />
          </div>
          <div className="logo-container">
            <img src={Logo2} alt="Logo2" />
          </div>
          <div className="logo-container">
            <img src={Logo3} alt="Logo3" />
          </div>
          <div className="logo-container">
            <img src={Logo4} alt="Logo4" />
          </div>
          <div className="logo-container">
            <img src={Logo5} alt="Logo5" />
          </div>
          <div className="logo-container">
            <img src={Logo6} alt="Logo6" />
          </div>
        </div>
      </div>
    </SoftwareSectionContainer>
  );
};

export default SoftwareSection;
