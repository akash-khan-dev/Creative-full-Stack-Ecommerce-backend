import { Poppins } from "next/font/google";
import React from "react";
import { IoIosStar } from "react-icons/io";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const ShowReview = () => {
  return (
    <>
      <div className="mt-4">
        <div className="reviewer-name">
          <h3 className={poppins.className}>Vanille</h3>
        </div>
        <div className="rating-date">
          <div className="rating">
            <span className={poppins.className}>5.0</span>
            <div>
              <IoIosStar color="#FFD687" />
              <IoIosStar color="#FFD687" />
              <IoIosStar color="#FFD687" />
              <IoIosStar color="#FFD687" />
            </div>
          </div>
          <div className="date">
            <span className={poppins.className}>1 Month Ago</span>
          </div>
        </div>
        <div className="review-description">
          <p className={poppins.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
};

export default ShowReview;
