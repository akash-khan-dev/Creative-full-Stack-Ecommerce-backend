import React from "react";
import "./FlashSale.css";
import { Col, Row } from "react-bootstrap";
import product from "../../../Image/pro.jpg";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Poppins } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const FlashProduct = () => {
  return (
    <>
      <Row>
        <Swiper
          spaceBetween={25}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Col>
              <div className="flash-product-wrapper">
                <div className="flash-product-img">
                  <Image src={product} width={300} height={300} alt="product" />
                  <div className="flash-badge">
                    <span>25% OFF</span>
                  </div>
                </div>
                <div className="flash-product-content">
                  <div className={poppins.className}>
                    <div className="flash-product-name">
                      <h2>Wireless Headphone</h2>
                    </div>
                    <div className="flash-product-price d-flex justify-content-center">
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
                    <div className="flash-product-basic-info ">
                      <p>Available: 10 </p>
                      <p>Sold: 5 </p>
                    </div>
                    <div className="prog-bar">
                      <ProgressBar variant="warning" now={50} />;
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col>
              <div className="flash-product-wrapper">
                <div className="flash-product-img">
                  <Image src={product} width={300} height={300} alt="product" />
                  <div className="flash-badge">
                    <span>25% OFF</span>
                  </div>
                </div>
                <div className="flash-product-content">
                  <div className={poppins.className}>
                    <div className="flash-product-name">
                      <h2>Wireless Headphone</h2>
                    </div>
                    <div className="flash-product-price d-flex justify-content-center">
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
                    <div className="flash-product-basic-info ">
                      <p>Available: 10 </p>
                      <p>Sold: 5 </p>
                    </div>
                    <div className="prog-bar">
                      <ProgressBar variant="warning" now={50} />;
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col>
              <div className="flash-product-wrapper">
                <div className="flash-product-img">
                  <Image src={product} width={300} height={300} alt="product" />
                  <div className="flash-badge">
                    <span>25% OFF</span>
                  </div>
                </div>
                <div className="flash-product-content">
                  <div className={poppins.className}>
                    <div className="flash-product-name">
                      <h2>Wireless Headphone</h2>
                    </div>
                    <div className="flash-product-price d-flex justify-content-center">
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
                    <div className="flash-product-basic-info ">
                      <p>Available: 10 </p>
                      <p>Sold: 5 </p>
                    </div>
                    <div className="prog-bar">
                      <ProgressBar variant="warning" now={50} />;
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </SwiperSlide>
          <SwiperSlide>
            <Col>
              <div className="flash-product-wrapper">
                <div className="flash-product-img">
                  <Image src={product} width={300} height={300} alt="product" />
                  <div className="flash-badge">
                    <span>25% OFF</span>
                  </div>
                </div>
                <div className="flash-product-content">
                  <div className={poppins.className}>
                    <div className="flash-product-name">
                      <h2>Wireless Headphone</h2>
                    </div>
                    <div className="flash-product-price d-flex justify-content-center">
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
                    <div className="flash-product-basic-info ">
                      <p>Available: 10 </p>
                      <p>Sold: 5 </p>
                    </div>
                    <div className="prog-bar">
                      <ProgressBar variant="warning" now={50} />;
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </SwiperSlide>
          ...
        </Swiper>
      </Row>
    </>
  );
};

export default FlashProduct;
