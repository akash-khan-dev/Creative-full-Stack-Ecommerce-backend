import { Poppins } from "next/font/google";
import React from "react";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Button = ({ product }) => {
  console.log(product);

  return (
    <>
      <button className={poppins.className}>Add to Cart</button>
    </>
  );
};

export default Button;
