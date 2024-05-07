import { useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const onFinish = async (values) => {
    console.log(values);
    try {
      setLoading(true);

      const url = "http://localhost:8000/api/v1/product/addprodect";
      const data = await axios.post(
        url,
        {
          name: values.name,
          avatar: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
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
  const handleUploadImage = (e) => {
    setImage(e.target.files[0]);
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
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your product name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <label style={{ display: "inline-block", marginLeft: "40px" }}>
            product image
          </label>
          <input
            style={{ marginLeft: "10px", display: "inline" }}
            onChange={handleUploadImage}
            type="file"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
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

export default AddProduct;
