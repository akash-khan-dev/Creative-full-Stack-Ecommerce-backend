"use client";
import React, { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./Registration.css";
import Link from "next/link";
import { useFormik } from "formik";
import { SignUpValidation } from "@/app/utils/formValidation";
import { BeatLoader } from "react-spinners";
import "./Registration.css";
import { useRouter } from "next/navigation";

const OtpForm = ({ userValue }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(240);
  const [otp, setOtp] = useState(new Array(5).fill(""));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);
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

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };
  const handleOtpMatch = async () => {
    try {
      const userOTP = otp.join("");
      const SendData = await fetch(
        "http://localhost:8000/api/v1/user/otpMatch",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            otp: userOTP,
            email: userValue.email,
          }),
        }
      );
      const data = await SendData.json();
      if (data.data.emailVerified == true) {
        router.push("/pages/login");
      }
    } catch (e) {
      console.log(e.message);
    }
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
            <h6>To Confirm The Email Enter 5 Digit OTP Here</h6>
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
            <Button
              onClick={handleOtpMatch}
              className="my-3 w-100 py-2"
              variant="danger"
            >
              Create Account
            </Button>
            {timeLeft > 0 ? (
              <div>
                <div className="timer">Time Left: {formatTime(timeLeft)}</div>
                <Button
                  onClick={handleOtpMatch}
                  className="my-3 w-100 py-2"
                  variant="danger"
                >
                  Create Account
                </Button>
              </div>
            ) : (
              <div>
                <div className="timer">Your Time is finish</div>
                <Button className="my-3 w-100 py-2" variant="danger">
                  Reset OTP
                </Button>
              </div>
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
