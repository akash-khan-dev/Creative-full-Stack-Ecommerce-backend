"use client";
import { Container } from "react-bootstrap";
import Category from "./components/section/Category/Category";
import Newarrival from "./components/section/Newarrival/Newarrival";
import FlashSale from "./components/section/FlashSale/FlashSale";
import Brand from "./components/section/Brand/Brand";
import Advice from "./components/section/Advice/Advice";
import Banner from "./components/section/Banner/Banner";
import Featured from "./components/section/Featured/Featured";
import TopRated from "./components/section/TopRated/TopRated";

export default function Home() {
  return (
    <>
      <Container>
        <Banner />
        <Category />
        <Newarrival />
        <FlashSale />
        <Brand />
        <Advice />
        <Featured />
        <TopRated />
      </Container>
    </>
  );
}
