import React from "react";
import "./Featured.css";
import { Col, Row } from "react-bootstrap";
import { Montserrat, Poppins } from "next/font/google";
import FeaturedProduct from "./FeaturedProduct";

const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Featured = () => {
  return (
    <section id="featured" className="py-5">
      <Row>
        <Col lg={3}>
          <div className="best-collection">
            <h2 className={monserrat.className}>Best Collection</h2>
            <p className={poppins.className}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <button className={poppins.className}>Shop Now</button>
          </div>
        </Col>
        <Col lg={9}>
          <FeaturedProduct />
        </Col>
      </Row>
    </section>
  );
};

export default Featured;
