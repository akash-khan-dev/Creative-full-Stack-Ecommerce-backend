/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const inputRef = useRef();
  const onFinish = async (values) => {
    try {
      setLoading(true);

      const url = "http://localhost:8000/api/v1/product/addprodect";
      const data = await axios.post(
        url,
        {
          name: values.name,
          slug: slug.split(" ").join("-").toLocaleLowerCase(),
          description: description,
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
          <Input onChange={(e) => setSlug(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Slug"
          name="slug"
          // rules={[
          //   {
          //     required: true,
          //     message: "Please input your product name",
          //   },
          // ]}
        >
          <Input
            disabled
            placeholder={slug.split(" ").join("-").toLocaleLowerCase()}
          />
        </Form.Item>

        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            // console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
          onBlur={(event, editor) => {
            // console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            // console.log("Focus.", editor);
          }}
        />

        <Form.Item>
          <label style={{ display: "inline-block" }}>Product image</label>
          <input
            style={{ marginLeft: "10px", display: "inline" }}
            onChange={handleUploadImage}
            type="file"
          />
          {/* <div
            style={{
              width: "100px",
              height: "100px",
              border: "1px dashed gray",
              cursor: "pointer",
            }}
            onClick={() => inputRef.current.click()}
          ></div> */}
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
