import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
const ViewSubCategory = () => {
  const [subCategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    async function getCategory() {
      const categoryURl = "http://localhost:8000/api/v1/product/viewcategory";
      const categoryData = await axios.get(categoryURl);

      const subCategoryURL =
        "http://localhost:8000/api/v1/product/viewsubcategory";
      const subCategoryData = await axios.get(subCategoryURL);

      const subCategory = [];

      subCategoryData.data.data.subCategory.map((item) => {
        subCategory.push({
          key: item._id,
          name: item.name,
          status: item.status,
          categoryId: categoryData.data.data.category.map(
            (data) => data._id === item.categoryId._id && data.name
          ),
        });
      });
      setSubCategoryList(subCategory);
    }
    getCategory();
  }, []);

  const dataSource = subCategoryList;

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
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "categoryId",
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default ViewSubCategory;
