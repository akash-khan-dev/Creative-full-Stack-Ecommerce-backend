import React from "react";
import "./Category.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import categoryIcon from "../../../Image/icon (1).png";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";

const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Category = () => {
  return (
    <>
      <Row>
        <Col>
          <div className="py-3">
            <div className={monserrat.className}>
              <h2 className="text-xl" style={{ color: "#383838" }}>
                Category
              </h2>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center px-4">
          <div className={poppins.className}>
            <Image src={categoryIcon} width={80} height={80} />
            <h5 className="mt-2 fs-4" style={{ color: "#383838" }}>
              Computer & Laptop
            </h5>
          </div>
        </Col>
        <Col className="text-center px-4">
          <div>
            <Image src={categoryIcon} width={80} height={80} />
            <h5 className="mt-2">Mobile & Tablet</h5>
          </div>
        </Col>
        <Col className="text-center px-4">
          <div>
            <Image src={categoryIcon} width={80} height={80} />
            <h5 className="mt-2">Camera</h5>
          </div>
        </Col>
        <Col className="text-center px-4">
          <div>
            <Image src={categoryIcon} width={80} height={80} />
            <h5 className="mt-2">TV & Smart Box</h5>
          </div>
        </Col>
        <Col className="text-center px-4">
          <div>
            <Image src={categoryIcon} width={80} height={80} />
            <h5 className="mt-2">Home Appliance</h5>
          </div>
        </Col>
        <Col className="text-center px-4">
          <div>
            <Image src={categoryIcon} width={80} height={80} />
            <h5 className="mt-2">Accessories</h5>
          </div>
        </Col>
        <Col className="text-center px-4">
          <div>
            <Image src={categoryIcon} width={80} height={80} />
            <h5 className="mt-2">Other Categories</h5>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Category;
