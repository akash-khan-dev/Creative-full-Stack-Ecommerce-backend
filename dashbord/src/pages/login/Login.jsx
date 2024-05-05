import { Button, Form, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const url = "http://localhost:8000/api/v1/user/login";
      // eslint-disable-next-line no-unused-vars
      const data = await axios.post(url, {
        email: values.email,
        password: values.password,
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
      console.log(data.data.data);
      setTimeout(() => {
        // navigate(`/`);
      }, 2000);
      setLoading(false);
    } catch (err) {
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
    }
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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

          <Link to={"/forgotpass"} style={{ marginLeft: "20px" }}>
            Forgot Password
          </Link>
          <div>
            <p>
              Create a new account ? <Link to={"/registration"}>Sing Up</Link>
            </p>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
