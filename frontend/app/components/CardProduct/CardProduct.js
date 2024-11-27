import React from "react";
import "./CardProduct.css";
import cardImg from "../../Image/card.png";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ImCross } from "react-icons/im";
import { Col } from "react-bootstrap";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const CardProduct = () => {
  return (
    <>
      <Col lg={8}>
        <div className="card-product me-5">
          <div className="card-product-header">
            <input id="check" type="checkbox" />
            <label htmlFor="check">Select All</label>
          </div>
          <div className="card-product-item-wrapper">
            <div className="card-product-item">
              <div className="card-check-box-area">
                <input id="check" type="checkbox" />
              </div>
              <div className="card-product-img">
                <Image src={cardImg} width={150} height={150} />
              </div>
              <div className="card-product-info">
                <h3 className={poppins.className}>USB Speaker Portable</h3>
                <h4 className={poppins.className}>$100.99</h4>
                <div className="quantity">
                  <button
                  //   onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  >
                    -
                  </button>
                  <small className={poppins.className}> 1</small>
                  <button
                  // onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="card-product-cancel">
                <ImCross />
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col lg={4}>
        <div className="card-total-amount-wrapper">
          <div className="coupon-area">
            <input
              type="text"
              name="coupon"
              id=""
              placeholder="Apply Coupon Code"
            />
            <button>Apply</button>
          </div>
          <div className="summary-box">
            <h4>Summary</h4>
            <div className="mount d-flex mt-3">
              <h6 className={poppins.className}>total</h6>
              <h5 className={poppins.className}>$202.00</h5>
            </div>
            <div className="check-out-btn">
              <button className={poppins.className}>Checkout</button>
            </div>
            <div className="continue-shopping text-center">
              <button className={poppins.className}>Continue Shopping</button>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CardProduct;
