import React from "react";
import "./Newarrival.css";
import { FaStar } from "react-icons/fa6";

import { Montserrat, Poppins } from "next/font/google";
import { Col, Row } from "react-bootstrap";
import NewProduct from "./NewProduct";
import Heading from "../../common/Heading/Heading";

const Newarrival = () => {
  return (
    <>
      <section className="py-5">
        <Heading title="New Arrival" />

        <NewProduct />
      </section>
    </>
  );
};

export default Newarrival;
