import BreadCrumb from "@/app/components/common/BreadCurmb/BreadCrumb";
import React from "react";
import "./Card.css";
import { Container, Row, Col } from "react-bootstrap";
import PageHeader from "@/app/components/common/PageHeader/PageHeader";
import CardProduct from "@/app/components/CardProduct/CardProduct";

const Card = () => {
  return (
    <>
      <section id="Card">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="breadcrumb-wrapper">
                <BreadCrumb />
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={5} className="mx-auto text-center">
              <div className="page-header-wrapper">
                <PageHeader text="My Card" />
              </div>
            </Col>
          </Row>
          <Row>
            <CardProduct />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Card;
