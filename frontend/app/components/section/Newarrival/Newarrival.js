import React from "react";
import "./Newarrival.css";
import { FaStar } from "react-icons/fa6";

import { Montserrat, Poppins } from "next/font/google";
import { Col, Row } from "react-bootstrap";
import NewProduct from "./NewProduct";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const Newarrival = () => {
  return (
    <>
      <section className="py-5">
        <Row>
          <Col>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className={monserrat.className}>
                <h2 className="fs-2" style={{ color: "#383838" }}>
                  New Arrival
                </h2>
              </div>
              <div className={poppins.className}></div>
              <button type="button" className="btn text-danger fs-4">
                View All
              </button>
            </div>
          </Col>
        </Row>

        <NewProduct />
      </section>
    </>
  );
};

export default Newarrival;
