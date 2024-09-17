import { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";

const AddCategory = () => {
  const [loading, setLoading] = useState(false);
  const [categoryImage, setCategoryImage] = useState("");
  const userInfo = useSelector((user) => user.user.value);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const url = "http://localhost:8000/api/v1/product/addcategory";
      const data = await axios.post(
        url,
        {
          name: values.category,
          avatar: categoryImage,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: "9560ae25-vswa-7160-9fyd-f6cee413cbe6",
            token: userInfo.token,
          },
        }
      );
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
  const handleUploadCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
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
          label="Add Category"
          name="category"
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
          <Form.Item>
            <label style={{ display: "inline-block" }}>Category Image</label>
            <input
              style={{ marginLeft: "10px", display: "inline" }}
              onChange={handleUploadCategoryImage}
              type="file"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            disabled={loading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCategory;
