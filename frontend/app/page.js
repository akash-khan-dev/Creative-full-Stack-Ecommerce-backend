import { Container } from "react-bootstrap";
import Category from "./components/section/Category/Category";
import Newarrival from "./components/section/Newarrival/Newarrival";
import FlashSale from "./components/section/FlashSale/FlashSale";
import Brand from "./components/section/Brand/Brand";
import Advice from "./components/section/Advice/Advice";
import Banner from "./components/section/Banner/Banner";
import Featured from "./components/section/Featured/Featured";
import TopRated from "./components/section/TopRated/TopRated";

async function fetchAllProducts() {
  const res = await fetch("http://localhost:8000/api/v1/product/viewprodect");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
async function fetchFlashProducts() {
  const res = await fetch("http://localhost:8000/api/v1/product/vewFlashSale");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  const allProducts = await fetchAllProducts(); // Renamed the variable
  const flashProducts = await fetchFlashProducts(); // Renamed the variable
  const endTime = flashProducts.data[0].time;

  return (
    <>
      <Container>
        <Banner />
        <Category />
        <Newarrival />
        <FlashSale
          endTime={endTime}
          flashProducts={flashProducts}
          allProducts={allProducts}
        />
        <Brand />
        <Advice />
        <Featured />
        <TopRated />
      </Container>
    </>
  );
}
