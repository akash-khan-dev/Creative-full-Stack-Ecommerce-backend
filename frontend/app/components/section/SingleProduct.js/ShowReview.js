import { timeAgo } from "@/app/utils/ReviewTime";
import { Poppins } from "next/font/google";
import React from "react";

import ReactStars from "react-rating-stars-component";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const ShowReview = ({ productReview }) => {
  return (
    <div className="review-wrapper">
      {productReview.data &&
        productReview.data.map((review) => (
          <div key={review._id} className="mt-4 review-item">
            <div className="reviewer-name">
              <h3 className={poppins.className}>{review.name}</h3>
            </div>
            <div className="rating-date">
              <div className="rating">
                <span className={poppins.className}>{review.ratting}.0</span>
                <div>
                  <ReactStars
                    count={5}
                    value={review.ratting}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="date">
                <span className={poppins.className}>
                  {timeAgo(review.createdAt)}
                </span>
              </div>
            </div>
            <div className="review-description">
              <p className={poppins.className}>{review.comment}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShowReview;
