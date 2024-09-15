import React from "react";
import "./Newarrival.css";
import { FaStar } from "react-icons/fa6";

import { Montserrat, Poppins } from "next/font/google";
import { Col, Row } from "react-bootstrap";

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
      <div className="py-5">
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
        <Row>
          <Col>
            <div className="new-product d-flex">
              <div className="pro-img">
                <img src="" alt="" />
                <div className="badge">
                  <div className={poppins.className}>
                    <small className="fs-6">New</small>
                  </div>
                </div>
              </div>
              <div className="pro-details d-flex justify-content-center align-items-center">
                <div>
                  <h4 className={poppins.className}>Smartphone 5G</h4>
                  <h5>$299.00 5G</h5>
                  <div className="pro-rating d-flex">
                    <div>
                      <FaStar color="#FFD687" />
                      <span>5.0</span>
                    </div>
                    <div>
                      <small>Sold 99</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="new-product d-flex">
              <div className="pro-img">
                <img src="" alt="" />
                <div className="badge">
                  <div className={poppins.className}>
                    <small className="fs-6">New</small>
                  </div>
                </div>
              </div>
              <div className="pro-details d-flex justify-content-center align-items-center">
                <div>
                  <h4 className={poppins.className}>Smartphone 5G</h4>
                  <h5>$299.00 5G</h5>
                  <div className="pro-rating d-flex">
                    <div>
                      <FaStar color="#FFD687" />
                      <span>5.0</span>
                    </div>
                    <div>
                      <small>Sold 99</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="new-product d-flex">
              <div className="pro-img">
                <img src="" alt="" />
                <div className="badge">
                  <div className={poppins.className}>
                    <small className="fs-6">New</small>
                  </div>
                </div>
              </div>
              <div className="pro-details d-flex justify-content-center align-items-center">
                <div>
                  <h4 className={poppins.className}>Smartphone 5G</h4>
                  <h5>$299.00 5G</h5>
                  <div className="pro-rating d-flex">
                    <div>
                      <FaStar color="#FFD687" />
                      <span>5.0</span>
                    </div>
                    <div>
                      <small>Sold 99</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Newarrival;
