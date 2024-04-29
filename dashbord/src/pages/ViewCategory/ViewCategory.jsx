import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
const ViewCategory = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    async function getCategory() {
      const url = "http://localhost:8000/api/v1/product/viewcategory";
      const data = await axios.get(url);
      const category = [];
      data.data.data.category.map((item) => {
        category.push({
          key: item._id,
          name: item.name,
          status: item.status,
        });
      });
      setCategoryList(category);
    }
    getCategory();
  }, []);

  const dataSource = categoryList;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default ViewCategory;
