/* eslint-disable no-unused-vars */
import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Input } from "antd";
import { Bounce, toast, ToastContainer } from "react-toastify";
const ViewCategory = () => {
  const [refresh, setRefresh] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({ name: "" });
  const [editState, setEditState] = useState(null);

  const showModal = (record) => {
    setCurrentRecord(record);
    setEditState(record);
    setIsModalOpen(true);
  };
  // for Category Edit
  const handleOk = async () => {
    try {
      setIsModalOpen(false);
      const url = `http://localhost:8000/api/v1/product/editcategory/${editState.key}`;
      const data = await axios.put(url, {
        name: currentRecord.name,
      });
      toast.success(data.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setRefresh(!refresh);
    } catch (err) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
          image: item.image,
        });
      });
      setCategoryList(category);
    }
    getCategory();
  }, [refresh]);

  // for category approved
  const handleApproveCategory = async (record) => {
    const url = "http://localhost:8000/api/v1/product/approvecategory";
    const data = await axios.post(url, {
      id: record.key,
      status: record.status,
    });
    setRefresh(!refresh);
  };

  // for delete category
  const handleDeleteCategory = async (record) => {
    const url = `http://localhost:8000/api/v1/product/deletecategory/${record.key}`;
    const data = await axios.delete(url);
    setRefresh(!refresh);
  };

  // Category Edit
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const dataSource = categoryList;
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
          <div
            style={{
              width: "250px",
              display: "flex",
              gap: "5px",
              justifyContent: "space-around",
            }}
          >
            <Button onClick={() => handleApproveCategory(record)}>
              {record.status == "waiting" ? "Approve" : "Reject"}
            </Button>
            <Button danger onClick={() => handleDeleteCategory(record)}>
              Delete
            </Button>
            <Button type="primary" onClick={() => showModal(record)}>
              Edit
            </Button>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <ToastContainer />
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        title="Category Edit"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="Edit Category"
          type="text"
          onChange={handleInputChange}
          name="name"
          value={currentRecord.name}
        />
      </Modal>
    </>
  );
};

export default ViewCategory;
