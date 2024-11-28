"use client";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Registration.css";
import Link from "next/link";
import { useFormik } from "formik";
import { SignUpValidation } from "@/app/utils/formValidation";
import { BeatLoader } from "react-spinners";
const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignUpValidation,
    onSubmit: async (values) => {
      console.log(values);
      try {
        setLoading(true);
        const data = await fetch("http://localhost:8000/api/v1/user/register", {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
            role: "User",
          }),
        });
        console.log("data", data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e.message);
      }
    },
  });
  return (
    <>
      <section id="registration">
        <Container>
          <Row>
            <Col lg={5} className="mx-auto">
              <div className="form-wrapper">
                <div className="form-heder text-center pb-3">
                  <h3>Create your account</h3>
                </div>
                <form
                  onSubmit={formik.handleSubmit}
                  action=""
                  className="form-box"
                >
                  <Form.Label htmlFor="name">Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Full Name"
                  />
                  <span className="review-error">
                    {formik.touched.name &&
                      formik.errors.name &&
                      formik.errors.name}
                  </span>
                  <Form.Label htmlFor="email">Your Email</Form.Label>
                  <Form.Control
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    id="email"
                    placeholder="Email Address"
                  />
                  <span className="review-error">
                    {formik.touched.email &&
                      formik.errors.email &&
                      formik.errors.email}
                  </span>
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <Form.Control
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                    id="password"
                    placeholder="Password"
                  />
                  <span className="review-error">
                    {formik.touched.password &&
                      formik.errors.password &&
                      formik.errors.password}
                  </span>
                  <Form.Label htmlFor="confirm">Confirm Password</Form.Label>
                  <Form.Control
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    type="password"
                    id="confirm"
                    placeholder="Confirm Password"
                  />
                  <span className="review-error">
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword &&
                      formik.errors.confirmPassword}
                  </span>
                  <div className="text-center">
                    {loading ? (
                      <Button
                        type="submit"
                        className="my-3 w-100 "
                        variant="danger"
                      >
                        <BeatLoader />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="my-3 w-100 "
                        variant="danger"
                      >
                        Create Account
                      </Button>
                    )}

                    <p>
                      Already have an account? <Link href={"#"}>Sign in</Link>
                    </p>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RegistrationForm;
