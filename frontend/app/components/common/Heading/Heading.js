import React from "react";
import "./Heading.css";
import { Col, Row } from "react-bootstrap";
import { Montserrat } from "next/font/google";
const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const Heading = ({ title }) => {
  return (
    <>
      <Row>
        <Col lg={12}>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="heading">
              <h2 className={monserrat.className}>{title}</h2>
            </div>
            <button type="button" className="btn text-danger fs-4">
              View All
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Heading;
