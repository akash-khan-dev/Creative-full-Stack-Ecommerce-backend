"use client";
import "./Menubar.css";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../Image/logo.png";
import { IoBagOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { Poppins } from "next/font/google";
import Topbar from "./Topbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Menubar = () => {
  const router = useRouter();
  const userInfo = useSelector((user) => user.LoginInfo.userInfo);
  const [cardProduct, setCardProduct] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/v1/product/showCart")
      .then((res) => res.json())
      .then((data) => {
        let tempArray = [];

        data.data.map((item) => {
          if (item.userId == userInfo.id) {
            tempArray.push(item);
          }
        });

        setCardProduct(tempArray);
      });
  }, []);

  return (
    <>
      <Topbar />
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Link href={"/"}>
              <Image src={logo} width={80} height={25} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className={poppins.className} href="#home">
                Home
              </Nav.Link>
              <Nav.Link className={poppins.className} href="#home">
                About
              </Nav.Link>
              <Nav.Link className={poppins.className} href="#home">
                Product
              </Nav.Link>
              <Nav.Link className={poppins.className} href="#home">
                Blog
              </Nav.Link>
              <Nav.Link className={poppins.className} href="#home">
                Contact
              </Nav.Link>
            </Nav>
            <div className="search-box">
              <input
                className={poppins.className}
                type="text"
                placeholder="Search here"
              />
              <div className="search-icon">
                <CiSearch color="#fff" size={24} />
              </div>
            </div>
            <div className="notification">
              <div
                onClick={() => router.push("/pages/Card")}
                className="shop-icon"
              >
                <IoBagOutline size={25} />

                {cardProduct?.length > 0 ? (
                  <div className="notification-count">
                    <p>{cardProduct?.length}</p>
                  </div>
                ) : null}
              </div>

              <div className="message-icon">
                <TiMessage size={30} />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menubar;
