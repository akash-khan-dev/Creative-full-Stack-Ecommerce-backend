"use client";
import React from "react";
import "./BreadCrumb.css";
import { Poppins } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
});
const BreadCrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  return (
    <>
      <div className="breadcrumb">
        <Link href={"http://localhost:3000/"} className={poppins.className}>
          Home
        </Link>
        <p>{`>`}</p>
        <h2 className={poppins.className}>{pathSegments[1]}</h2>
      </div>
    </>
  );
};

export default BreadCrumb;
