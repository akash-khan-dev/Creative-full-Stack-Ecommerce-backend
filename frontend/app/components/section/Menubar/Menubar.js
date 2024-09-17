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
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const Menubar = () => {
  return (
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
            <div className="shop-icon">
              <IoBagOutline size={25} />
              <div className="notification-count">
                <p>99</p>
              </div>
            </div>
            <div className="message-icon">
              <TiMessage size={30} />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
