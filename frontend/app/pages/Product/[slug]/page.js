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

async function getReviewData(productId) {
  const category = await fetch(
    `http://localhost:8000/api/v1/product/viewReview/${productId}`
  );

  if (!category.ok) {
    throw new Error("Failed to fetch data");
  }

  return category.json();
}
const Product = async ({ params }) => {
  const slug = params.slug;
  const product = await getData(slug);
  const productReview = await getReviewData(product.data._id);

  return (
    <>
      <Container>
        <SingleProduct data={product} productReview={productReview} />
      </Container>
    </>
  );
};

export default Product;
