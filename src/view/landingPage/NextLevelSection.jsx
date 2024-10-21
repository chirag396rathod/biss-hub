import React from "react";
import { NextLevelSectionContainer } from "./styled";
import CommonButton from "../../components/CommonButton";

import sectionImage from "../../assets/next-lavel-image.svg";
import BelongingImage from "../../assets/Belonging.svg";
import PromotionalImage from "../../assets/promotional.svg";
import BlessingImage from "../../assets/blessing.svg";
import Arrow from "../../assets/arrow-right.svg";
import { Col, Row } from "react-bootstrap";

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
      <div className="goth-section container">
        <div className="section-title">We help your business grow faster.</div>
        <div className="section-description">
          Why kept very ever home mrs. Considered sympathize ten <br />{" "}
          uncommonly occasional assistance sufficient.
        </div>
        <Row className="grow-list">
          <Col md={4} lg={4} sm={12}>
            <div className="grow-item">
              <div className="icon-cover">
                <img src={BelongingImage} alt="" />
              </div>
              <div className="title">Offending belonging</div>
              <div className="card-desc">
                Letter of on become he tended active enable to. Vicinity
                relation sensible sociable surprise screened no up as.
              </div>
              <div className="link">
                Read More
                <img src={Arrow} alt="" />
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} sm={12}>
            <div className="grow-item">
              <div className="icon-cover">
                <img src={PromotionalImage} alt="" />
              </div>
              <div className="title">Promotion & provision</div>
              <div className="card-desc">
                Led ask possible mistress relation elegance eat likewise
                debating. By message or am nothing amongst chiefly address.
              </div>
              <div className="link">
                Read More
                <img src={Arrow} alt="" />
              </div>
            </div>
          </Col>
          <Col md={4} lg={4} sm={12}>
            <div className="grow-item">
              <div className="icon-cover">
                <img src={BlessingImage} alt="" />
              </div>
              <div className="title">Blessing application</div>
              <div className="card-desc">
                Ham windows sixteen who inquiry fortune demands. Is be upon sang
                fond must shew. Really boy law county she unable her sister.
              </div>
              <div className="link">
                Read More
                <img src={Arrow} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer-button-container">
        <CommonButton
          text="More About Platform"
          type={"button"}
          className={"footer-button"}
        />
      </div>
    </NextLevelSectionContainer>
  );
};

export default NextLevelSection;
