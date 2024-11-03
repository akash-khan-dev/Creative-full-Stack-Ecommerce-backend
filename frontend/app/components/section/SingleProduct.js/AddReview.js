import { Poppins } from "next/font/google";
import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { IoIosStar } from "react-icons/io";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const AddReview = () => {
  return (
    <>
      <div className="add-review-wrapper ">
        <div className="add-review-header ">
          <h4 className={poppins.className}>Add Your Review</h4>
          <p className={poppins.className}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.{" "}
          </p>
        </div>
        <div className="input-form">
          <div className="mt-3">
            <Form.Label htmlFor="name">
              Name <span>*</span>
            </Form.Label>
            <Form.Control type="text" id="name" />
          </div>
          <div className="mt-3">
            <Form.Label htmlFor="email">
              Email <span>*</span>
            </Form.Label>
            <Form.Control type="email" id="email" />
          </div>
          <div className="mt-3">
            <Form.Label htmlFor="review">
              Review <span>*</span>
            </Form.Label>

            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              placeholder="Leave a comment here"
            />
          </div>
          <div className="send-rating">
            <h5>Rating</h5>
            <div>
              <IoIosStar color="#FFD687" />
              <IoIosStar color="#FFD687" />
              <IoIosStar color="#FFD687" />
              <IoIosStar color="#FFD687" />
              <IoIosStar color="#A7A7A7" />
            </div>
          </div>
          <Button className="mt-3" variant="danger">
            Submit{" "}
          </Button>{" "}
        </div>
      </div>
    </>
  );
};

export default AddReview;
