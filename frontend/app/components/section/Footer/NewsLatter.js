import React from "react";
import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { Montserrat, Poppins } from "next/font/google";
const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const NewsLatter = () => {
  return (
    <section id="news-latter" className="news-latter py-5">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="content-wrapper ms-4">
              <div className="latter-icon">
                <HiOutlineNewspaper color="#FAFAFA" size={80} />
              </div>
              <div className="latter-content">
                <h3 className={monserrat.className}>
                  Join our newsletter now!
                </h3>
                <p className={poppins.className}>
                  Register now and get our latest updates and promos.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="subscription-box">
              <input
                className={poppins.className}
                type="text"
                placeholder="Enter your email"
              />
              <button className={poppins.className}>Join</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLatter;
