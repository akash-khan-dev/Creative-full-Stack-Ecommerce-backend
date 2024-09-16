import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../common/Heading/Heading";
import Image from "next/image";
import product from "../../../Image/pro.jpg";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const FeaturedProduct = () => {
  return (
    <>
      <div>
        <Row>
          <Col lg={12}>
            <Heading title="Featured Products" />
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="featured-product-wrapper">
              <div className="featured-product-img">
                <Image src={product} width={305} height={280} alt="product" />
                <div className="featured-badge-one">
                  <span className={poppins.className}>New</span>
                </div>
                <div className="featured-badge-two">
                  <span className={poppins.className}>25% OFF</span>
                </div>
              </div>
              <div className="featured-product-content">
                <div className={poppins.className}>
                  <div className="featured-product-name">
                    <h2>Wireless Headphone</h2>
                  </div>
                  <div className="featured-product-price d-flex justify-content-center">
                    <div className="old-price ">
                      <span>$29.99</span>
                    </div>
                    <div className="new-price">
                      <span>
                        {" "}
                        <span>-</span>$19.99
                      </span>
                    </div>
                  </div>
                  <div className="add-card-btn">
                    <button className={poppins.className}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="featured-product-wrapper">
              <div className="featured-product-img">
                <Image src={product} width={305} height={280} alt="product" />
                <div className="featured-badge-one">
                  <span className={poppins.className}>New</span>
                </div>
                <div className="featured-badge-two">
                  <span className={poppins.className}>25% OFF</span>
                </div>
              </div>
              <div className="featured-product-content">
                <div className={poppins.className}>
                  <div className="featured-product-name">
                    <h2>Wireless Headphone</h2>
                  </div>
                  <div className="featured-product-price d-flex justify-content-center">
                    <div className="old-price ">
                      <span>$29.99</span>
                    </div>
                    <div className="new-price">
                      <span>
                        {" "}
                        <span>-</span>$19.99
                      </span>
                    </div>
                  </div>
                  <div className="add-card-btn">
                    <button className={poppins.className}>Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="featured-product-wrapper">
              <div className="featured-product-img">
                <Image src={product} width={305} height={280} alt="product" />
                <div className="featured-badge-one">
                  <span className={poppins.className}>New</span>
                </div>
                <div className="featured-badge-two">
                  <span className={poppins.className}>25% OFF</span>
                </div>
              </div>
              <div className="featured-product-content">
                <div className={poppins.className}>
                  <div className="featured-product-name">
                    <h2>Wireless Headphone</h2>
                  </div>
                  <div className="featured-product-price d-flex justify-content-center">
                    <div className="old-price ">
                      <span>$29.99</span>
                    </div>
                    <div className="new-price">
                      <span>
                        {" "}
                        <span>-</span>$19.99
                      </span>
                    </div>
                  </div>
                  <div className="add-card-btn">
                    <button className={poppins.className}>Add to Cart</button>
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

export default FeaturedProduct;
