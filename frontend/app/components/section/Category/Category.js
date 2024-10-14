import "./Category.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";

const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

async function getData() {
  const category = await fetch(
    "http://localhost:8000/api/v1/product/viewcategory"
  );

  if (!category.ok) {
    throw new Error("Failed to fetch data");
  }

  return category.json();
}
const Category = async () => {
  const data = await getData();

  return (
    <section id="category">
      <Row>
        <Col>
          <div className="py-3">
            <div className={monserrat.className}>
              <h2 className="text-xl" style={{ color: "#383838" }}>
                Category
              </h2>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {data.data.category.map(
          (category) =>
            category.status === "approved" && (
              <Col lg={2} key={category._id} className="text-center ">
                <div className={poppins.className}>
                  <Image
                    src={`http:/localhost:8000/${category.image}`}
                    width={80}
                    height={80}
                    alt="category"
                  />
                  <h5 className="mt-2 fs-4" style={{ color: "#383838" }}>
                    {category.name}
                  </h5>
                </div>
              </Col>
            )
        )}
      </Row>
    </section>
  );
};

export default Category;
