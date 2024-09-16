"use client";
import "./banner.css";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import hero from "../../../Image/hero image.png";
import heroTwo from "../../../Image/01.png";
import Link from "next/link";

const Banner = () => {
  return (
    <section id="banner" className="py-5">
      <Row>
        <Col lg={8}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <div className="banner-img">
                <Link href={"/"}>
                  <Image src={hero} width={858} height={500} alt="hero" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="banner-img">
                <Link href={"/"}>
                  <Image src={hero} width={858} height={500} alt="hero" />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="banner-img">
                <Link href={"/"}>
                  <Image src={hero} width={858} height={500} alt="hero" />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
        <Col lg={4}>
          <div className="banner-add-wrapper">
            <div className="add-img-wrapper">
              <Link href={"/"}>
                <Image src={heroTwo} width={415} height={250} alt="add" />
              </Link>
            </div>
            <div className="add-img-wrapper">
              <Link href={"/"}>
                <Image src={heroTwo} width={415} height={250} alt="add" />
              </Link>
            </div>
            <div></div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Banner;
