import "./Category.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";

const monserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    async function getCategory() {
      try {
        const url = "http://localhost:8000/api/v1/product/viewcategory";
        const data = await axios.get(url);
        const category = [];
        data.data.data.category.map((item) => {
          if (item.status === "approved") {
            category.push({
              key: item._id,
              name: item.name,
              status: item.status,
              image: item.image,
            });
          }
          setCategoryList(category);
        });
      } catch (e) {
        console.log(e.message);
      }
    }
    getCategory();
  }, []);

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
        {categoryList.map((category) => (
          <Col lg={2} key={category.key} className="text-center ">
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
        ))}
      </Row>
    </section>
  );
};

export default Category;
