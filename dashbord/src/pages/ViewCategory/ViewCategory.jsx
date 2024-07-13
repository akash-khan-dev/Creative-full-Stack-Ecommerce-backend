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

  // for category approved
  const handleApproveCategory = async (record) => {
    console.log(record);
    const url = "http://localhost:8000/api/v1/product/approvecategory";
    const data = await axios.post(url, {
      id: record.key,
      status: record.status,
    });
  };

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
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <>
          <div>
            <button onClick={() => handleApproveCategory(record)}>
              {record.status == "waiting" ? "Approve" : "Reject"}
            </button>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default ViewCategory;
