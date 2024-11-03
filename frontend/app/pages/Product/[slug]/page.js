import SingleProduct from "@/app/components/section/SingleProduct.js";
import React from "react";
import { Container, Row } from "react-bootstrap";

async function getData(slug) {
  const res = await fetch(
    `http://localhost:8000/api/v1/product/singleProduct/${slug}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Product = async ({ params }) => {
  const slug = params.slug;
  const product = await getData(slug);

  return (
    <>
      <Container>
        <SingleProduct data={product} />
      </Container>
    </>
  );
};

export default Product;
