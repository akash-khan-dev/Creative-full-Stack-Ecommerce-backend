import { Montserrat } from "next/font/google";
import React from "react";
import "./PageHeader.css";
const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const PageHeader = ({ text }) => {
  return (
    <>
      <div className="page-header">
        <h2 className={monserrat.className}>{text}</h2>
        <div className="pages-progress">
          <div className="current-page">
            <div className="first-part">
              <div className="page-number">
                <span>1</span>
              </div>
              <p>My Cart</p>
            </div>
            <div className="second-part">
              <div className="page-number checkout">
                <span>2</span>
              </div>
              <p>Checkout </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
