/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const AddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState([]);
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [SubCategoryList, setSubCategoryList] = useState([]);
  const [type, setType] = useState("");
  const [proType, setProType] = useState([
    {
      value: "normal",
      label: "normal",
    },
    {
      value: "New",
      label: "New Arrival",
    },
    {
      value: "feature",
      label: "Featured Products",
    },
    {
      value: "top",
      label: "Top Rated Product",
    },
    {
      value: "flash",
      label: "Flash Sale",
    },
  ]);
  const [catId, setCatId] = useState("");
  const [subCatId, setSubCatId] = useState("");

  // const inputRef = useRef();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      let formData = new FormData();
      formData.append("name", values.name);
      formData.append("slug", slug.split(" ").join("-").toLocaleLowerCase());
      formData.append("regularPrice", values.price);
      formData.append("discount", values.discount);
      formData.append("catId", catId);
      formData.append("proType", type);
      formData.append("subCatId", subCatId);
      formData.append("description", description);
      image.forEach((item) => {
        formData.append("avatar", item);
      });
      const url = "http://localhost:8000/api/v1/product/addprodect";
      const data = await axios.post(
        url,

        formData,
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

  // show category
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

  const handleChange = async (e) => {
    try {
      const url = `http://localhost:8000/api/v1/product/singlesubcategory/${e}`;
      const data = await axios.get(url);
      const SubCategory = [];
      data.data.subcategory.map((item) => {
        SubCategory.push({
          value: item._id,
          label: item.name,
        });
      });
      setSubCategoryList(SubCategory);
      setCatId(e);
    } catch (e) {
      console.log(e.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleUploadImage = (e) => {
    let arr = Array.from(e.target.files);
    setImage(arr);
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

        <Form.Item
          label="Product Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input your product price",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Product Discount Price"
          name="discount"
          rules={[
            {
              required: true,
              message: "Please input your product discount price",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* category box */}

        <span style={{ marginLeft: "130px", marginRight: "12px" }}>
          Category
        </span>
        <Select
          style={{
            width: 120,
            marginBottom: "20px",
          }}
          onChange={handleChange}
          options={categoryList}
        />
        {SubCategoryList.length > 0 && (
          <div>
            <span style={{ marginLeft: "100px", marginRight: "12px" }}>
              Sub Category
            </span>
            <Select
              style={{
                width: 120,
                marginBottom: "20px",
              }}
              onChange={(e) => setSubCatId(e)}
              options={SubCategoryList}
            />
          </div>
        )}
        <div>
          <span style={{ marginLeft: "45px", marginRight: "12px" }}>
            Select Product Section
          </span>
          <Select
            style={{
              width: 120,
              marginBottom: "20px",
            }}
            onChange={(e) => setType(e)}
            options={proType}
          />
        </div>
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
            multiple
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
