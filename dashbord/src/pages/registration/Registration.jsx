/* eslint-disable react/prop-types */
import { Button, Form, Input, Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
const Registration = () => {
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    setLoading(true);
    const url = "http://localhost:8000/api/v1/user/register";
    const data = await axios
      .post(url, {
        name: values.username,
        email: values.email,
        password: values.password,
      })
      .then((data) => {
        toast.success(data.data.status, {
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
        // setTimeout(() => {
        //   navigate(`/otpVerification/${values.email}`);
        // }, 2000);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.error, {
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
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
          <Button onClick={showModal} style={{ marginLeft: "50px " }}>
            Resend Mail
          </Button>
          <div>
            <p>
              Already have an account ? <Link to={"/login"}> Sing In</Link>
            </p>
          </div>
        </Form.Item>
      </Form>
      <ResendMailModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default Registration;

const ResendMailModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    // setLoading(true);
    const url = "http://localhost:8000/api/v1/user/resetMail";
    const data = await axios
      .post(url, { email: values.email })
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
          handleOk(false);
        }, 1500);
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
    // setLoading(false);
    // console.log("error:", errorInfo);
  };
  return (
    <Modal
      footer={null}
      title="Resent your Verification Email !"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
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
    </Modal>
  );
};
