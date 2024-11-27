import React from "react";
import "./TopRated.css";
import { Col, Row } from "react-bootstrap";
import Heading from "../../common/Heading/Heading";
import Image from "next/image";

import { Poppins } from "next/font/google";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";
import Button from "../../common/Button/Button";

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

const TopRated = async () => {
  const product = await getData();
  const newProduct = product.data.filter((data) => data.proType === "top");
  const fourProduct = newProduct.slice(0, 4);

  return (
    <section id="top-rated" className="py-4 mb-5">
      <Row>
        <Col lg={12}>
          <Heading title={"Top Rated Product"} />
        </Col>
        {fourProduct.map((product) => (
          <Col lg={3}>
            <div className="top-rated-product-wrapper">
              <div className="top-rated-product-img">
                <Image
                  src={`http://localhost:8000/${product.image[0]}`}
                  width={250}
                  height={250}
                  alt="product"
                />
              </div>
              <div className="top-rated-product-content">
                <div className="top-rated-product-name">
                  <Link
                    key={product._id}
                    href={`pages/Product/${product.slug}`}
                  >
                    <h2 className={poppins.className}>{product.name}</h2>
                  </Link>
                </div>
                <div className="top-rated-product-price">
                  <p className={poppins.className}>{product.regularPrice}</p>
                </div>
                <div className="product-rating d-flex">
                  <div>
                    <FaStar color="#FFD687" />
                    <span className="mx-1">5.0</span>
                  </div>
                  <div className="mx-2">|</div>
                  <div>
                    <small className={poppins.className}>Sold 99</small>
                  </div>
                </div>
                <div className="top-rated-product-btn">
                  <div className="add-card-btn">
                    <Button product={product} />
                  </div>
                  <div className="wish-list-btn">
                    <FaHeart size={26} color="#D0D0D2" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default TopRated;
