import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsLatter from "./NewsLatter";
import Link from "next/link";
import logo from "../../../Image/logo.png";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { Poppins } from "next/font/google";
import { CgMail } from "react-icons/cg";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Footer = () => {
  return (
    <footer id="footer">
      <NewsLatter />
      <Container>
        <Row className="mt-5 pb-4">
          <Col lg={3}>
            <div className="footer-content">
              <Link href={"/"}>
                <Image src={logo} width={80} height={25} alt="logo" />
              </Link>
              <div className="mt-3">
                <p className={poppins.className}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  dicta
                </p>
              </div>
              <div className="contact mt-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <FaPhoneAlt color="#f46b5b" />
                  <p className={poppins.className}>01704801533</p>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <CgMail size={25} color="#f46b5b" />
                  <p className={poppins.className}>akash910971@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} className="offset-3">
            <div className="footer-content">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    Product
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="footer-content">
              <h4>Information</h4>
              <ul>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    Product
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className={poppins.className}>
                    Career
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="footer-content">
              <h4>Follow Us</h4>
              <div className="social-wrapper mt-3">
                <div className="footer-social-icon">
                  <Link href={"#"}>
                    <FaInstagram size={25} color="#fff" />
                  </Link>
                </div>
                <div className="footer-social-icon">
                  <Link href={"#"}>
                    <FaTwitter size={25} color="#fff" />
                  </Link>
                </div>
                <div className="footer-social-icon">
                  <Link href={"#"}>
                    <CiFacebook size={25} color="#fff" />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="copyRight my-3 d-flex justify-content-between">
              <p>© {new Date().getFullYear()} akash. All Rights Reserved.</p>
              <div className="d-flex aligns-item-center">
                <CiCreditCard1 />
                <CiCreditCard1 />
                <CiCreditCard1 />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
