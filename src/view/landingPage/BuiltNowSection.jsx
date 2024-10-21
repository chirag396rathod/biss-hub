import React from "react";
import { BuiltNowSectionContainer } from "./styled";
import { Col, Row } from "react-bootstrap";
import StarIcon from "../../assets/star.svg";
import BadgeIcon from "../../assets/badge.svg";
import IdeaIcon from "../../assets/idea.svg";

const BuiltNowSection = () => {
  return (
    <BuiltNowSectionContainer>
      <div className="container">
        <Row>
          <Col md={3} lg={3} sm={12}>
            <div className="title">Among leave law built now.</div>
          </Col>
          <Col md={3} lg={3} sm={12}>
            <div className="text-item">
              <div className="image-cover">
                <img src={StarIcon} alt="StarIcon" />
              </div>
              <div className="content">Village did remov enjoyed</div>
            </div>
          </Col>
          <Col md={3} lg={3} sm={12}>
            <div className="text-item">
              <div className="image-cover">
                <img src={BadgeIcon} alt="BadgeIcon" />
              </div>
              <div className="content">Nay likely length sooner</div>
            </div>
          </Col>
          <Col md={3} lg={3} sm={12}>
            <div className="text-item">
              <div className="image-cover">
                <img src={IdeaIcon} alt="IdeaIcon" />
              </div>
              <div className="content">Expense windows adapted </div>
            </div>
          </Col>
        </Row>
      </div>
    </BuiltNowSectionContainer>
  );
};

export default BuiltNowSection;
