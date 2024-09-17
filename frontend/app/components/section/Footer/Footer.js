import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsLatter from "./NewsLatter";

const Footer = () => {
  return (
    <footer id="footer">
      <NewsLatter />
      <Row>
        <Col lg={12}>
          <h1>footer</h1>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
