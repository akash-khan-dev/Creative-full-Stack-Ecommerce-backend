"use client";
import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Registration.css";
import Link from "next/link";
import { useFormik } from "formik";
import { SignUpValidation } from "@/app/utils/formValidation";
import { BeatLoader } from "react-spinners";
import "./Registration.css";

const OtpForm = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(new Array(5).fill(""));
  console.log(otp);
  const convertNumber = parseInt(otp.join(""));
  console.log(typeof convertNumber);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Focus next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    alert(`Entered OTP: ${otp.join("")}`);
  };
  return (
    <Col lg={5} className="mx-auto">
      <div className="form-wrapper">
        <div className="form-heder text-center pb-3">
          <h3>Create your account</h3>
        </div>
        <form action="" className="form-box">
          <div className="otp-container">
            <h2>Enter OTP</h2>
            <p>Please enter the 5-digit code sent to your email.</p>
            <div className="otp-input">
              {otp.map((data, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  className="otp-box"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            {loading ? (
              <Button type="submit" className="my-3 w-100 " variant="danger">
                <BeatLoader />
              </Button>
            ) : (
              <Button
                type="submit"
                className="my-3 w-100 py-2"
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
  );
};

export default OtpForm;
