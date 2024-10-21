import React from "react";
import { NextLevelSectionContainer } from "./styled";
import CommonButton from "../../components/CommonButton";

import sectionImage from "../../assets/next-lavel-image.svg";
import BelongingImage from "../../assets/Belonging.svg";
import PromotionalImage from "../../assets/promotional.svg";
import BlessingImage from "../../assets/blessing.svg";

const NextLevelSection = () => {
  return (
    <NextLevelSectionContainer>
      <div className="section-image-container">
        <div className="image-cover">
          <img src={sectionImage} alt="sectionImage" />
          <div className="content">
            <div className="title">Push your product to next level.</div>
            <div className="description">
              End-to-end payments and financial management in a single <br />{" "}
              solution. Meet the right platform to help realize.
            </div>
            <CommonButton
              className={"rounded-button"}
              text={"Get Started"}
              type={"button"}
            />
          </div>
        </div>
      </div>
      <div className="goth-section">
        <div className="section-title">We help your business grow faster.</div>
        <div className="section-description">
          Why kept very ever home mrs. Considered sympathize ten <br />{" "}
          uncommonly occasional assistance sufficient.
        </div>
        <Row className="grow-list"></Row>
      </div>
    </NextLevelSectionContainer>
  );
};

export default NextLevelSection;
