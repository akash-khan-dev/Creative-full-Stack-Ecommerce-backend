"use client";
import { Poppins } from "next/font/google";
import React from "react";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Button = ({ product }) => {
  const router = useRouter();
  const userInfo = useSelector((user) => user.LoginInfo.userInfo);
  const handleAddToCart = async () => {
    try {
      if (userInfo) {
        const SendData = await fetch(
          "http://localhost:8000/api/v1/product/addCart",
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: product._id,
              userId: userInfo.id,
              quantity: 1,
            }),
          }
        );
        const data = await SendData.json();
        toast.success(data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        router.push("/pages/login");
      }
    } catch (err) {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <button onClick={handleAddToCart} className={poppins.className}>
        Add to Cart
      </button>
    </>
  );
};

export default Button;
