"use client";
import { useFormik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import "./login.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: async (values) => {},
  });
  return (
    <section id="login">
      <Container>
        <Row>
          <Col lg={5} className="mx-auto">
            <div className="form-wrapper">
              <div className="form-heder text-center pb-3">
                <h3>Login to your account</h3>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="form-box"
              >
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
                    Don't have an account?
                    <Link href={"/pages/signup"}> Sign up</Link>
                  </p>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LoginForm;
