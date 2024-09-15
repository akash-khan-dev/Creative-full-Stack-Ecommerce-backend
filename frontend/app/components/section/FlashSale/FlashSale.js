"use client";
import React from "react";
import "./FlashSale.css";
import { Col, Row } from "react-bootstrap";
import { useTimer } from "@/app/utils/useTimer";
import FlashProduct from "./FlashProduct";

const FlashSale = () => {
  const endDate = "2024-12-31";
  const timeLeft = useTimer(endDate);
  return (
    <>
      <section className="py-10">
        <Row>
          <Col>
            <div className="flash-hear d-flex align-items-center justify-content-between">
              <div className=" d-flex align-items-center gap-5">
                <h2>Flash Sale</h2>
                <div>
                  <div className="timer d-flex gap-3">
                    <p>
                      <span>{timeLeft.hours}</span> hrs
                    </p>
                    <p>
                      <span>{timeLeft.minutes}</span> min
                    </p>
                    <p>
                      <span> {timeLeft.seconds}</span>
                      sec
                    </p>
                  </div>
                </div>
              </div>
              <button type="button" className="btn text-danger fs-4">
                View All
              </button>
            </div>
          </Col>
        </Row>

        <FlashProduct />
      </section>
    </>
  );
};

export default FlashSale;
