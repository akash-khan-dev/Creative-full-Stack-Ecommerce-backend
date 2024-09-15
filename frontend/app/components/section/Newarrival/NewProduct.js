import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";
import product from "../../../Image/pro.jpg";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const NewProduct = () => {
  return (
    <>
      <Row>
        <Col lg={4}>
          <div className="new-product-wrapper d-flex">
            <div className="pro-img">
              <Image src={product} width={200} height={300} alt="product" />
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
        <Col lg={4}>
          <div className="new-product-wrapper d-flex">
            <div className="pro-img">
              <Image src={product} width={200} height={300} alt="product" />
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
        <Col lg={4}>
          <div className="new-product-wrapper d-flex">
            <div className="pro-img">
              <Image src={product} width={200} height={300} alt="product" />
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
    </>
  );
};

export default NewProduct;
