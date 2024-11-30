"use client";
import "./CardProduct.css";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { ImCross } from "react-icons/im";
import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const CardProduct = () => {
  const [cardProduct, setCardProduct] = useState(null);
  const userInfo = useSelector((user) => user.LoginInfo.userInfo);

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/product/showCart")
      .then((res) => res.json())
      .then((data) => {
        let tempArray = [];

        data.data.map((item) => {
          if (item.userId == userInfo.id) {
            tempArray.push(item);
          }
        });

        setCardProduct(tempArray);
      });
  }, []);
  return (
    <>
      <Col lg={8}>
        <div className="card-product me-5">
          <div className="card-product-header">
            <input id="check" type="checkbox" />
            <label htmlFor="check">Select All</label>
          </div>
          <div className="card-product-item-wrapper">
            {cardProduct?.map((product) => (
              <div className="card-product-item">
                <div className="card-check-box-area">
                  <input id="check" type="checkbox" />
                </div>
                <div className="card-product-img">
                  <Image
                    src={`http://localhost:8000/${product?.productId?.image[0]}`}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="card-product-info">
                  <h3 className={poppins.className}>
                    {product.productId.name}
                  </h3>
                  <h4 className={poppins.className}>
                    ${product.productId.regularPrice}
                  </h4>
                  <div className="quantity">
                    <button
                    //   onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    >
                      -
                    </button>
                    <small className={poppins.className}>
                      {" "}
                      {product?.productId?.quantity}
                    </small>
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
            ))}
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
