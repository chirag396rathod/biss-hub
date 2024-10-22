import React from "react";
import { Col, Row } from "react-bootstrap";
import { WhyChooseUsContainer } from "./styled";

const WhyChooseUs = () => {
  return (
    <WhyChooseUsContainer>
      <div className="container">
        <Row>
          <Col md={6} lg={6} sm={12}>
            <div className="sub-text">Why Choose Us</div>
            <div className="sec-title">
              Track your crytpo <br /> portfolio on the <br /> best way possible
            </div>
            <div className="sec-desc">
              Mean if he they been no hold mr. Is at much do made. <br /> Latter
              person am secure of estate genius at.
            </div>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <form className="form-inputs">
              <input type="text" placeholder="Email Address" />
              <input type="text" placeholder="Password" />
              <button>Get Started</button>
            </form>
          </Col>
        </Row>
      </div>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUs;
