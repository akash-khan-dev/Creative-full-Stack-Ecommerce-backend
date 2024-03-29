import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

const NewPassword = () => {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const onFinish = async (values) => {
    setLoading(true);
    const url = "http://localhost:8000/api/v1/user/newpass";
    // eslint-disable-next-line no-unused-vars
    const data = await axios
      .post(url, {
        token: params.token,
        password: values.password,
      })
      .then((data) => {
        console.log("Successfully");
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
      })
      .catch((err) => {
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
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
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

export default NewPassword;
