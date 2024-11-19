"use client";
import React, { useState } from "react";
import "./SingleProduct.css";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { Poppins } from "next/font/google";
import { Delivery } from "@/SVG/Delivery";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ShowReview from "./ShowReview";
import AddReview from "./AddReview";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const SingleProduct = ({ data }) => {
  const product = data.data;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let [quality, setQuality] = useState(1);
  let [active, setActive] = useState(1);
  return (
    <>
      <section className="product">
        <Row>
          <Col lg={6}>
            <div className="product-image">
              <Swiper
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {product.image.map((item, index) => (
                  <SwiperSlide>
                    <Image
                      src={`http://localhost:8000/${item}`}
                      width={400}
                      height={400}
                      alt="product"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="thumbails">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {product.image.map((item, index) => (
                    <SwiperSlide>
                      <Image
                        src={`http://localhost:8000/${item}`}
                        width={400}
                        height={400}
                        alt="product"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="product-information-wrapper">
              <div className="details">
                <div className="bread-crumb">
                  <p className={poppins.className}>
                    Product {" > "} <span>{product.name}</span>
                  </p>
                </div>
                <div className="rate-and-wish">
                  <div className="rate">
                    <div className="star">
                      <span className={poppins.className}>5.0</span>
                      <div>
                        <IoIosStar size={20} color="#FFD687" />
                        <IoIosStar size={20} color="#FFD687" />
                        <IoIosStar size={20} color="#FFD687" />
                        <IoIosStar size={20} color="#FFD687" />
                        <IoIosStar size={20} color="#FFD687" />
                      </div>
                    </div>
                    <div className="review">
                      <span className={poppins.className}>Review (12)</span>
                    </div>
                    <span className="line">|</span>
                    <div className="sold">
                      <span className={poppins.className}>Sold 99</span>
                    </div>
                  </div>
                  <div className="wish">
                    <div className="heart">
                      <FaHeart color="#F46B5B" size={22} />
                    </div>
                    <div className="add-wish">
                      <p className={poppins.className}>Add to Wishlist</p>
                    </div>
                  </div>
                </div>
                <div className="product-name">
                  <h4 className={poppins.className}>{product.name}</h4>
                </div>
                <div className="product-price">
                  {product.discount ? (
                    <>
                      <div className="price">
                        <h5 className={poppins.className}>
                          ${product.regularPrice - product.discount}
                        </h5>
                      </div>
                      <div className="discount">
                        <span className={poppins.className}>
                          ${product.regularPrice}
                        </span>
                      </div>
                      <div className="save">
                        <span className={poppins.className}>
                          Save{" "}
                          {Math.round(
                            (product.discount / product.regularPrice) * 100
                          )}
                          %
                        </span>
                      </div>
                    </>
                  ) : (
                    <h5 className={poppins.className}>
                      ${product.regularPrice}
                    </h5>
                  )}
                </div>
                <div className="product-info">
                  <div className="delivery">
                    <Delivery />
                    <span className={poppins.className}>Free Delivery</span>
                  </div>
                  <div className="voucher">
                    <Delivery />
                    <span className={poppins.className}>Available Voucher</span>
                  </div>
                  <div className="stock">
                    <Delivery />
                    <span className={poppins.className}>In Stock</span>
                  </div>
                </div>
              </div>
              <div className="product-description">
                <h4 className={poppins.className}>Description</h4>
                <p
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  className={poppins.className}
                ></p>
              </div>
              <div className="add-card">
                <div className="quantity">
                  <span className={poppins.className}>quantity</span>
                  <button
                    onClick={() => setQuality(quality > 1 ? quality - 1 : 1)}
                  >
                    -
                  </button>
                  <small>{quality}</small>
                  <button onClick={() => setQuality(quality + 1)}>+</button>
                </div>
                <div className="add-btn">
                  <button className={poppins.className}>Chat</button>
                  <button className={poppins.className}>Add to Cart</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="show-review">
              <div className="review-menu">
                <ul>
                  <li
                    onClick={() => setActive(1)}
                    className={poppins.className}
                    style={
                      active === 1 ? { color: "#F46B5B" } : { color: "#383838" }
                    }
                  >
                    Review(200)
                  </li>
                  <li
                    onClick={() => setActive(2)}
                    style={
                      active === 2 ? { color: "#F46B5B" } : { color: "#383838" }
                    }
                    className={poppins.className}
                  >
                    Description
                  </li>
                </ul>
              </div>
              <ShowReview />
              <ShowReview />
              <ShowReview />
            </div>
          </Col>
          <Col lg={6}>
            <div className="add-review mt-5">
              <AddReview />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SingleProduct;
