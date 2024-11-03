import SingleProduct from "@/app/components/section/SingleProduct.js";
import React from "react";
import { Container, Row } from "react-bootstrap";

const Product = ({ params }) => {
  console.log(params.slug);

  return (
    <>
      <Container>
        <SingleProduct />
      </Container>
    </>
  );
};

export default Product;
