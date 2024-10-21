import React from "react";
import { FooterContainer } from "./styled";
import { Col, Row } from "react-bootstrap";

import Icon1 from "../../assets/linkedin.svg";
import Icon2 from "../../assets/messenger.svg";
import Icon3 from "../../assets/twitter.svg";
import Icon4 from "../../assets/twoo.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <Row>
          <Col md={3} lg={3} sm={12}>
            <div className="title">AR Shakir</div>
            <div className="descri">
              Simple innate summer fat <br /> appear basket his desire joy.
            </div>
            <div className="social-list">
              <img src={Icon1} alt="Icon" />
              <img src={Icon2} alt="Icon" />
              <img src={Icon3} alt="Icon" />
              <img src={Icon4} alt="Icon" />
            </div>
          </Col>
          <Col md={3} lg={2} sm={12}>
            <div className="label">Company</div>
            <div className="link-item">About Us</div>
            <div className="link-item">Careers</div>
            <div className="link-item">Blog</div>
            <div className="link-item">Pricing</div>
          </Col>
          <Col md={3} lg={3} sm={12}>
            <div className="label">Resources</div>
            <div className="link-item">Templates</div>
            <div className="link-item">Tutorials</div>
            <div className="link-item">Free resources</div>
            <div className="link-item">Contract templates</div>
          </Col>
          <Col md={4} lg={4} sm={12}>
            <div className="label">Company</div>
            <div className="input-group">
              <input type="text" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
            <div className="info-item">
              * Will send you weekly updates for your better <br /> finance
              management.
            </div>
          </Col>
        </Row>
        <div className="copy-right">
          Copyright @ BusinessHub 2022. All Rights Reserved.
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
