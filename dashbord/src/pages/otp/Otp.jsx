import { Button, Form, Input } from "antd";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
const Otp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const onFinish = async (values) => {
    const url = "http://localhost:8000/api/v1/user/otp";
    // eslint-disable-next-line no-unused-vars
    const data = await axios
      .post(url, {
        email: params.email,
        otp: values.otp,
      })
      .then((data) => {
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
        setTimeout(() => {
          navigate("/login");
        }, 2000);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
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
      });
  };
  const onFinishFailed = (errorInfo) => {
    setLoading(false);
    console.log("error:", errorInfo);
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
          label="Code"
          name="otp"
          rules={[
            {
              required: true,
              message: "Please input your OTP!",
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
          <Button
            type="primary"
            loading={loading}
            disabled={loading}
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Otp;
