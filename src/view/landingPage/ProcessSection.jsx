import React from "react";
import { ProcessSectionContainer } from "./styled";
import CommonButton from "../../components/CommonButton";
import { Col, Row } from "react-bootstrap";

const ProcessSection = () => {
  const mock = [
    {
      title: "Project Discovery Call",
      desc: "Party we years to order allow asked of. We so opinion friends me message as delight. ",
    },
    {
      title: "Project Discovery Call",
      desc: "His defective nor convinced residence own. Connection has put impossible own apartments boisterous. ",
    },
    {
      title: "Project Discovery Call",
      desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly. ",
    },
  ];
  return (
    <ProcessSectionContainer>
      <div className="left-circle"></div>
      <div className="container">
        <div className="section-sub-title">
          Stockie Operation Across the world
        </div>
        <div className="section-title">We have best team and best process</div>
        <div className="section-description">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </div>
        <div className="button-container">
          <CommonButton
            text={"Get Started"}
            type={"button"}
            className="rounded-button"
          />
        </div>
        <Row className="process-list">
          {mock.map((item, index) => (
            <Col md={4} sm={12} lg={4} className="process-item" key={item.desc}>
              <div className="point">
                <div className="dark-dot"></div>
                <div className="index">{index + 1}</div>
              </div>
              <div className="content">
                <div className="card-title">{item.title}</div>
                <div className="card-description">{item.desc}</div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="right-circle"></div>
    </ProcessSectionContainer>
  );
};

export default ProcessSection;
