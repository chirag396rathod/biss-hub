import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CommonButton from "../../components/CommonButton";
import { OfferedSectionContainer } from './styled';

const OfferedSection = () => {
  return (
    <OfferedSectionContainer>
      <div className="container">
        <Row>
          <Col md={6} lg={6} sm={12}>
            <div className="card-item">
              <div className="title">Offend belong <br /> promote provision</div>
              <div className="desc">Wise busy past both park when an ye no. Nay likely her length <br /> sooner thrown sex lively income.</div>
              <CommonButton text={"Read More"} />
            </div>
          </Col>
          <Col md={6} lg={6} sm={12}>
            <div className="card-item">
              <div className="title">Consulted ourselves it <br /> blessing welcom</div>
              <div className="desc">The expense windows adapted sir. Wrong widen drawn ample eat <br /> off doors money.</div>
              <CommonButton text={"Read More"} />
            </div>
          </Col>
        </Row>
      </div>
    </OfferedSectionContainer>
  )
}

export default OfferedSection