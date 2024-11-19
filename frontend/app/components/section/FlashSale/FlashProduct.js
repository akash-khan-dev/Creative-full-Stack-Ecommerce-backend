import React from "react";
import "./FlashSale.css";
import { Col, Row } from "react-bootstrap";
import product from "../../../Image/pro.jpg";
import Image from "next/image";
import ProgressBar from "react-bootstrap/ProgressBar";
import { Poppins } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const FlashProduct = ({ flashProduct }) => {
  return (
    <>
      <Row>
        <Swiper
          spaceBetween={25}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {flashProduct.map((product) => (
            <SwiperSlide>
              <Link href={`pages/Product/${product.slug}`}>
                <Col lg={12}>
                  <div className="flash-product-wrapper">
                    <div className="flash-product-img">
                      <Image
                        src={`http://localhost:8000/${product.image[0]}`}
                        width={300}
                        height={300}
                        alt="product"
                      />
                      <div className="flash-badge">
                        <span>25% OFF</span>
                      </div>
                    </div>
                    <div className="flash-product-content">
                      <div className={poppins.className}>
                        <div className="flash-product-name">
                          <h2>{product.name}</h2>
                        </div>
                        <div className="flash-product-price d-flex justify-content-center">
                          <div className="old-price ">
                            <span>${product.regularPrice}</span>
                          </div>
                          <div className="new-price">
                            <span>
                              {" "}
                              <span>-</span>
                              {product.regularPrice - product.discount}
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
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </>
  );
};

export default FlashProduct;
