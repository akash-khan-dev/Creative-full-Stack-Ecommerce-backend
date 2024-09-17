import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Topbar = () => {
  return (
    <section id="topbar" className="bg-body-tertiary">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="topbar-wrapper">
              <div className="social-icon">
                <Link href={"/"}>
                  <FaInstagram size={20} color="#A7A7A7" />
                </Link>
                <Link href={"/"}>
                  <FaFacebookSquare size={20} color="#A7A7A7" />
                </Link>
                <Link href={"/"}>
                  <FaTwitter size={20} color="#A7A7A7" />
                </Link>
                <Link href={"/"}>
                  <FaLinkedin size={20} color="#A7A7A7" />
                </Link>
              </div>
              <div className="information">
                <div className="info-icon">
                  <BsTelephone color="#F46B5B" size={20} />
                  <small className={poppins.className}>+12 345 6789 0</small>
                </div>
                <div className="info-icon">
                  <HiOutlineMail color="#F46B5B" size={24} />
                  <small className={poppins.className}>
                    akash910971@gmail.com
                  </small>
                </div>
                <div className="info-icon">
                  <RiAccountCircleLine color="#F46B5B" size={24} />
                  <small className={poppins.className}>Account</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Topbar;
