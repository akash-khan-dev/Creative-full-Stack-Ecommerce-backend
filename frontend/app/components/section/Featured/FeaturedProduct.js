import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../common/Heading/Heading";
import Image from "next/image";
import product from "../../../Image/pro.jpg";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

async function getData() {
  const res = await fetch("http://localhost:8000/api/v1/product/viewprodect");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const FeaturedProduct = async () => {
  const product = await getData();
  const theeProduct = product.data.slice(0, 3);

  return (
    <>
      <div>
        <Row>
          <Col lg={12}>
            <Heading title="Featured Products" />
          </Col>
        </Row>
        <Row>
          {theeProduct.map((product) => (
            <Col key={product._id} lg={4}>
              <div className="featured-product-wrapper">
                <div className="featured-product-img">
                  <Image
                    src={`http://localhost:8000/${product.image[0]}`}
                    width={305}
                    height={280}
                    alt="product"
                  />
                  <div className="featured-badge-one">
                    <span className={poppins.className}>{product.proType}</span>
                  </div>
                  <div className="featured-badge-two">
                    <span className={poppins.className}>-10% OFF</span>
                  </div>
                </div>
                <div className="featured-product-content">
                  <div className={poppins.className}>
                    <div className="featured-product-name">
                      <h2>{product.name}</h2>
                    </div>
                    <div className="featured-product-price d-flex justify-content-center">
                      <div className="old-price ">
                        <span>{product.discount}</span>
                      </div>
                      <div className="new-price">
                        <span>
                          {" "}
                          <span>-</span>
                          {product.regularPrice}
                        </span>
                      </div>
                    </div>
                    <div className="add-card-btn">
                      <button className={poppins.className}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default FeaturedProduct;
