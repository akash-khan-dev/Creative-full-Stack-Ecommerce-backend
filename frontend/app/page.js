import { Container } from "react-bootstrap";
import Category from "./components/section/Category/Category";
import Newarrival from "./components/section/Newarrival/Newarrival";
import FlashSale from "./components/section/FlashSale/FlashSale";

export default function Home() {
  return (
    <>
      <Container>
        <Category />
        <Newarrival />
        <FlashSale />
      </Container>
    </>
  );
}
