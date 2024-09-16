import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Row } from "react-bootstrap";
import advice from "../../../Image/advice.png";

const Advice = () => {
  return (
    <section id="advice " className="py-5 ">
      <Row>
        <Col lg={12}>
          <Link href={"/"}>
            <Image src={advice} width={1300} height={300} alt="advice" />
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default Advice;
