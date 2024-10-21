import React from "react";
import { LandingPageContainer } from "./styled";

import Sidevector from "../../assets/left-vector.svg";
import HeroImage from "../../assets/hero-image.svg";
import CheckIcon from "../../assets/check-icon.svg";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <div className="left-vector">
        <img src={Sidevector} alt="Sidevector" />
      </div>
      <div className="hero-image">
        <img src={HeroImage} alt="HeroImage" />
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="sub-title">
            Product Growth Solution in Single Platform.
          </div>
          <div className="hero-text">
            Managing business <br /> payments has never <br /> been easier
          </div>
          <div className="description">
            Never at water me might. On formed merits hunted unable <br />{" "}
            merely by mr whence or. Possession the unpleasing simplicity <br />{" "}
            her uncommonly.
          </div>
          <div className="connection-box">
            <div className="left">
              <label>Stay connected & get updates</label>
              <input type="text" placeholder="shakir260@gmail.com" />
            </div>
            <button>Submit</button>
          </div>
          <div className="key-points">
            <div className="point-item">
              <img src={CheckIcon} alt="CheckIcon" />
              <div className="text">Free Register</div>
            </div>
            <div className="point-item">
              <img src={CheckIcon} alt="CheckIcon" />
              <div className="text">Great Service</div>
            </div>
          </div>
        </div>
      </div>
    </LandingPageContainer>
  );
};

export default LandingPage;
