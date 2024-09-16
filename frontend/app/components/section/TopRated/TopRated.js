import React from "react";
import "./TopRated.css";
import { Col, Row } from "react-bootstrap";
import Heading from "../../common/Heading/Heading";
import Image from "next/image";
import product from "../../../Image/pro.jpg";
import { Poppins } from "next/font/google";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const TopRated = () => {
  return (
    <section id="top-rated" className="py-4">
      <Row>
        <Col lg={12}>
          <Heading title={"Top Rated Product"} />
        </Col>
        <Col lg={3}>
          <div className="top-rated-product-wrapper">
            <div className="top-rated-product-img">
              <Image src={product} width={250} height={250} alt="product" />
            </div>
            <div className="top-rated-product-content">
              <div className="top-rated-product-name">
                <h2 className={poppins.className}>Smart Mop Robot</h2>
              </div>
              <div className="top-rated-product-price">
                <p className={poppins.className}>$1000.00</p>
              </div>
              <div className="product-rating d-flex">
                <div>
                  <FaStar color="#FFD687" />
                  <span className="mx-1">5.0</span>
                </div>
                <div className="mx-2">|</div>
                <div>
                  <small className={poppins.className}>Sold 99</small>
                </div>
              </div>
              <div className="top-rated-product-btn">
                <div className="add-card-btn">
                  <button className={poppins.className}>Add to Cart</button>
                </div>
                <div className="wish-list-btn">
                  <FaHeart size={26} color="#D0D0D2" />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="top-rated-product-wrapper">
            <div className="top-rated-product-img">
              <Image src={product} width={250} height={250} alt="product" />
            </div>
            <div className="top-rated-product-content">
              <div className="top-rated-product-name">
                <h2 className={poppins.className}>Smart Mop Robot</h2>
              </div>
              <div className="top-rated-product-price">
                <p className={poppins.className}>$1000.00</p>
              </div>
              <div className="product-rating d-flex">
                <div>
                  <FaStar color="#FFD687" />
                  <span className="mx-1">5.0</span>
                </div>
                <div className="mx-2">|</div>
                <div>
                  <small className={poppins.className}>Sold 99</small>
                </div>
              </div>
              <div className="top-rated-product-btn">
                <div className="add-card-btn">
                  <button className={poppins.className}>Add to Cart</button>
                </div>
                <div className="wish-list-btn">
                  <FaHeart size={26} color="#D0D0D2" />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="top-rated-product-wrapper">
            <div className="top-rated-product-img">
              <Image src={product} width={250} height={250} alt="product" />
            </div>
            <div className="top-rated-product-content">
              <div className="top-rated-product-name">
                <h2 className={poppins.className}>Smart Mop Robot</h2>
              </div>
              <div className="top-rated-product-price">
                <p className={poppins.className}>$1000.00</p>
              </div>
              <div className="product-rating d-flex">
                <div>
                  <FaStar color="#FFD687" />
                  <span className="mx-1">5.0</span>
                </div>
                <div className="mx-2">|</div>
                <div>
                  <small className={poppins.className}>Sold 99</small>
                </div>
              </div>
              <div className="top-rated-product-btn">
                <div className="add-card-btn">
                  <button className={poppins.className}>Add to Cart</button>
                </div>
                <div className="wish-list-btn">
                  <FaHeart size={26} color="#D0D0D2" />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={3}>
          <div className="top-rated-product-wrapper">
            <div className="top-rated-product-img">
              <Image src={product} width={250} height={250} alt="product" />
            </div>
            <div className="top-rated-product-content">
              <div className="top-rated-product-name">
                <h2 className={poppins.className}>Smart Mop Robot</h2>
              </div>
              <div className="top-rated-product-price">
                <p className={poppins.className}>$1000.00</p>
              </div>
              <div className="product-rating d-flex">
                <div>
                  <FaStar color="#FFD687" />
                  <span className="mx-1">5.0</span>
                </div>
                <div className="mx-2">|</div>
                <div>
                  <small className={poppins.className}>Sold 99</small>
                </div>
              </div>
              <div className="top-rated-product-btn">
                <div className="add-card-btn">
                  <button className={poppins.className}>Add to Cart</button>
                </div>
                <div className="wish-list-btn">
                  <FaHeart size={26} color="#D0D0D2" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default TopRated;
