"use client";
import React, { useEffect, useState } from "react";
import "./FlashSale.css";
import { useTimer } from "@/app/utils/useTimer";
import FlashProduct from "./FlashProduct";

const FlashSale = ({ flashProducts, allProducts }) => {
  const [endFlashTime, setEndFlashTime] = useState("");
  const [flashProduct, setFlashProduct] = useState([]);
  const endDate = endFlashTime;
  const timeLeft = useTimer(endDate);

  useEffect(() => {
    // ======for flash time
    flashProducts.data.map((product) => {
      setEndFlashTime(product.time);
      const filteredData = allProducts.data.filter((item) =>
        product.selectProduct.includes(item._id)
      );
      setFlashProduct(filteredData);
    });
  }, []);
  return (
    <>
      <section className="py-10">
        <div className="row">
          <div className="col-lg-12">
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
          </div>
        </div>
        <FlashProduct flashProduct={flashProduct} />
      </section>
    </>
  );
};

export default FlashSale;
