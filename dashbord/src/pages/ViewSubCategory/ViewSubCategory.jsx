/* eslint-disable no-unused-vars */
import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
const ViewSubCategory = () => {
  const [subCategoryList, setSubCategoryList] = useState([]);

  //for show Sub Category
  useEffect(() => {
    async function getCategory() {
      try {
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
      } catch (err) {
        console.log(err.message);
      }
    }
    getCategory();
  }, []);

  // for approved sub categories
  const handleApproveSubCategory = async (record) => {
    console.log(record);
    try {
      const categoryURl =
        "http://localhost:8000/api/v1/product/approvesubcategory";
      const approvedSubCategory = await axios.post(categoryURl, {
        id: record.key,
        status: record.status,
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  // for Sub category Delete
  const handleDeleteSubCategory = async (record) => {
    try {
      const categoryURl = `http://localhost:8000/api/v1/product/deletesubcategory/${record.key}`;
      const deleteSubCategory = await axios.delete(categoryURl);
    } catch (err) {
      console.log(err.message);
    }
  };
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

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div
            style={{
              width: "250px",
              display: "flex",
              gap: "5px",
              justifyContent: "space-around",
            }}
          >
            <Button onClick={() => handleApproveSubCategory(record)}>
              {record.status == "waiting" ? "Approve" : "Reject"}
            </Button>
            <Button danger onClick={() => handleDeleteSubCategory(record)}>
              Delete
            </Button>
            <Button type="primary">Edit</Button>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default ViewSubCategory;
