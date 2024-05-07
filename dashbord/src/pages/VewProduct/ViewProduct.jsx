import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
const ViewProduct = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const url = "http://localhost:8000/api/v1/product/viewprodect";
      const data = await axios.get(url);
      const productArr = [];
      data.data.data.map((item) => {
        productArr.push({
          key: item._id,
          name: item.name,
          image: item.image,
        });
      });
      setProductList(productArr);
    }
    getProduct();
  }, []);

  const dataSource = productList;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img
          width={30}
          src={`http://localhost:8000/${record.image}`}
          alt="product"
        />
      ),
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default ViewProduct;
