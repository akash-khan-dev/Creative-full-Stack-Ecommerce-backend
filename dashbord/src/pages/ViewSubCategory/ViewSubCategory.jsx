/* eslint-disable no-unused-vars */
import { Button, Table, Modal, Input, Select } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bounce, toast, ToastContainer } from "react-toastify";
const ViewSubCategory = () => {
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRecord, setCurrentRecord] = useState({ name: "" });
  const [editState, setEditState] = useState(null);
  const [defaultCategory, setDefaultCategory] = useState("");
  const [refresh, setRefresh] = useState(false);

  // for edit modal show
  const showModal = (record) => {
    setCurrentRecord(record);
    const filterCategory = record.categoryId.filter(
      (category) => category !== false
    );
    setDefaultCategory(filterCategory[0]);
    setEditState(record);
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    try {
      setIsModalOpen(false);
      const url = `http://localhost:8000/api/v1/product/editsubcategory/${editState.key}`;
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
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

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
  }, [refresh]);

  // for approved sub categories
  const handleApproveSubCategory = async (record) => {
    try {
      const categoryURl =
        "http://localhost:8000/api/v1/product/approvesubcategory";
      const approvedSubCategory = await axios.post(categoryURl, {
        id: record.key,
        status: record.status,
      });
      setRefresh(!refresh);
    } catch (err) {
      console.log(err.message);
    }
  };

  // for Sub category Delete
  const handleDeleteSubCategory = async (record) => {
    try {
      const categoryURl = `http://localhost:8000/api/v1/product/deletesubcategory/${record.key}`;
      const deleteSubCategory = await axios.delete(categoryURl);
      setRefresh(!refresh);
    } catch (err) {
      console.log(err.message);
    }
  };

  // for View sub categories
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
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
            <Button onClick={() => showModal(record)} type="primary">
              Edit
            </Button>
          </div>
        </>
      ),
    },
  ];

  // refresh the page

  return (
    <>
      <ToastContainer />
      <Table dataSource={dataSource} columns={columns} />;
      <Modal
        title="Edit Sub Category"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <label htmlFor="subcategory">Sub Category</label>
          <Input
            value={currentRecord.name}
            onChange={handleInputChange}
            name="name"
            id="subcategory"
            placeholder="Sub Category"
            style={{ marginBottom: "10px", marginTop: "8px" }}
          />
          <Select value={defaultCategory} />
        </div>
      </Modal>
    </>
  );
};

export default ViewSubCategory;
