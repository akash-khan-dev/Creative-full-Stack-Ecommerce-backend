import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
const AddSubCategory = () => {
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [catId, setCatId] = useState("");

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const url = "http://localhost:8000/api/v1/product/addsubcategory";
      const data = await axios.post(url, {
        name: values.subcategory,
        categoryId: catId,
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
      setLoading(false);
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
    setLoading(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    async function getCategory() {
      const url = "http://localhost:8000/api/v1/product/viewcategory";
      const data = await axios.get(url);
      const category = [];
      data.data.data.category.map((item) => {
        category.push({
          value: item._id,
          label: item.name,
        });
      });
      setCategoryList(category);
    }
    getCategory();
  }, []);

  const handleChange = (e) => {
    setCatId(e);
  };

  return (
    <>
      <ToastContainer />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label=" SubCategory Name"
          name="subcategory"
          rules={[
            {
              required: true,
              message: "Please input your category name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <span style={{ marginLeft: "-70px", marginRight: "12px" }}>
            Category
          </span>
          <Select
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={categoryList}
          />
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
            style={{ display: "block", marginTop: "20px" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddSubCategory;
