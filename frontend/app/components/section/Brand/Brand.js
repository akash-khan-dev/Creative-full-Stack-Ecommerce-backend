import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import brandOne from "../../../Image/brand-1.png";
import brandTwo from "../../../Image/brand-2.png";
import brandThree from "../../../Image/brand-3.png";
import brandFour from "../../../Image/brand-4.png";
import brandFive from "../../../Image/brand-5.png";
import brandSix from "../../../Image/brand-6.png";

const Brand = () => {
  return (
    <section id="brand" className="py-5 px-3">
      <Row>
        <Col lg={2}>
          <div className="brand-wrapper">
            <Image src={brandOne} alt="brand" />
          </div>
        </Col>
        <Col lg={2}>
          <div className="brand-wrapper">
            <Image src={brandTwo} alt="brand" />
          </div>
        </Col>
        <Col lg={2}>
          <div className="brand-wrapper">
            <Image src={brandThree} alt="brand" />
          </div>
        </Col>
        <Col lg={2}>
          <div className="brand-wrapper">
            <Image src={brandFour} alt="brand" />
          </div>
        </Col>
        <Col lg={2}>
          <div className="brand-wrapper">
            <Image src={brandFive} alt="brand" />
          </div>
        </Col>
        <Col lg={2}>
          <div className="brand-wrapper">
            <Image src={brandSix} alt="brand" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Brand;
