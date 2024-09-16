"use client";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";

import Slider from "react-slick";

import hero from "../../../Image/hero image.png";
import heroTwo from "../../../Image/01.png";

const Banner = () => {
  return (
    <section id="banner">
      <Row>
        <Col lg={8}>
          <div className="banner-img">
            <Image src={hero} width={858} height={500} alt="hero" />
          </div>
        </Col>

        <Col lg={4}></Col>
      </Row>
    </section>
  );
};

export default Banner;
