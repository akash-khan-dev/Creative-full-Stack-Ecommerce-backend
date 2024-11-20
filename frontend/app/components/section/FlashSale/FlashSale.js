"use client";
import React, { useEffect, useState } from "react";
import "./FlashSale.css";
import { useTimer } from "@/app/utils/useTimer";
import FlashProduct from "./FlashProduct";
import { Col, Row } from "react-bootstrap";

const FlashSale = ({ endTime, flashProducts, allProducts }) => {
  const [flashProduct, setFlashProduct] = useState([]);

  const timeLeft = useTimer(endTime);

  useEffect(() => {
    // ======for flash product map====
    flashProducts.data.map((product) => {
      const filteredData = allProducts.data.filter((item) =>
        product.selectProduct.includes(item._id)
      );
      setFlashProduct(filteredData);
    });
  }, []);

  return (
    <>
      <section className="py-10">
        <Row>
          <Col lg={12}>
            <div className="flash-hear d-flex align-items-center justify-content-between">
              <div className=" d-flex align-items-center gap-5">
                <h2>Flash Sale</h2>
                <div>
                  <div className="timer d-flex gap-3">
                    {timeLeft.days > 0 ? (
                      <p>
                        <span>{timeLeft.days}</span> day
                      </p>
                    ) : (
                      <p>
                        <span>{0}</span> day
                      </p>
                    )}
                    {timeLeft.hours > 0 ? (
                      <p>
                        <span>{timeLeft.hours}</span> hrs
                      </p>
                    ) : (
                      <p>
                        <span>{0}</span> hrs
                      </p>
                    )}
                    {timeLeft.minutes > 0 ? (
                      <p>
                        <span>{timeLeft.minutes}</span> min
                      </p>
                    ) : (
                      <p>
                        <span>{0}</span> min
                      </p>
                    )}

                    {timeLeft.seconds > 0 ? (
                      <p>
                        <span>{timeLeft.seconds}</span> sec
                      </p>
                    ) : (
                      <p>
                        <span>{0}</span> sec
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <button type="button" className="btn text-danger fs-4">
                View All
              </button>
            </div>
          </Col>
        </Row>
        <FlashProduct flashProduct={flashProduct} />
      </section>
    </>
  );
};

export default FlashSale;
