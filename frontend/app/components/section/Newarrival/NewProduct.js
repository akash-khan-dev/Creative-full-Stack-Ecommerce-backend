import { Poppins } from "next/font/google";
import Image from "next/image";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa6";

import Link from "next/link";
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
const NewProduct = async () => {
  const product = await getData();
  const newProduct = product.data.filter((data) => data.proType === "New");
  const theeProduct = newProduct.slice(0, 3);

  return (
    <>
      <Row>
        {theeProduct.map((item) => (
          <Col key={item._id} lg={4}>
            <Link href={`pages/Product/${item.slug}`}>
              <div className="new-product-wrapper d-flex">
                <div className="pro-img">
                  <Image
                    src={`http://localhost:8000/${item.image[0]}`}
                    width={200}
                    height={300}
                    alt="product"
                  />
                  <div className="badge">
                    <div className={poppins.className}>
                      <small className="fs-6">{item.proType}</small>
                    </div>
                  </div>
                </div>
                <div className="pro-details d-flex justify-content-center align-items-center">
                  <div>
                    <h4 className={poppins.className}>{item.name}</h4>
                    <h5>${item.regularPrice}</h5>
                    <div className="pro-rating d-flex">
                      <div>
                        <FaStar color="#FFD687" />
                        <span>5.0</span>
                      </div>
                      <div>
                        <small>Sold 99</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NewProduct;
