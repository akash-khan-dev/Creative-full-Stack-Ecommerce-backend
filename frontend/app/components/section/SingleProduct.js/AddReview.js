import { Poppins } from "next/font/google";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import { useFormik } from "formik";
import { ReviewValidation } from "@/app/utils/formValidation";
import BeatLoader from "react-spinners/BeatLoader";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const AddReview = ({ productId }) => {
  const [ratting, setRaging] = useState(null);
  const [loading, setLoading] = useState(false);
  const ratingChanged = (newRating) => {
    setRaging(newRating);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      review: "",
    },
    validationSchema: ReviewValidation,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await fetch("http://localhost:8000/api/v1/product/addReview", {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...values, ratting, productId }),
        });
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e.message);
      }
    },
  });
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
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="mt-3">
              <Form.Label htmlFor="name">
                Name <span>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <span className="review-error">
                {formik.touched.name &&
                  formik.errors.name &&
                  formik.errors.name}
              </span>
            </div>
            <div className="mt-3">
              <Form.Label htmlFor="email">
                Email <span>*</span>
              </Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <span className="review-error">
                {formik.touched.email &&
                  formik.errors.email &&
                  formik.errors.email}
              </span>
            </div>
            <div className="mt-3">
              <Form.Label htmlFor="review">
                Review <span>*</span>
              </Form.Label>

              <Form.Control
                as="textarea"
                style={{ height: "100px" }}
                placeholder="Leave a comment here"
                name="review"
                onChange={formik.handleChange}
                value={formik.values.review}
              />
              <span className="review-error">
                {formik.touched.review &&
                  formik.errors.review &&
                  formik.errors.review}
              </span>
            </div>
            <div className="send-rating">
              <h5>Rating</h5>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            {loading ? (
              <Button type="submit" className="mt-3" variant="danger">
                <BeatLoader />
              </Button>
            ) : (
              <Button type="submit" className="mt-3" variant="danger">
                Submit
              </Button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AddReview;
