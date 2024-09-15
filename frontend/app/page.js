import { Container } from "react-bootstrap";
import Category from "./components/section/Category/Category";
import Newarrival from "./components/section/Newarrival/Newarrival";
import FlashSale from "./components/section/FlashSale/FlashSale";
import Brand from "./components/section/Brand/Brand";

export default function Home() {
  return (
    <>
      <Container>
        <Category />
        <Newarrival />
        <FlashSale />
        <Brand />
      </Container>
    </>
  );
}
