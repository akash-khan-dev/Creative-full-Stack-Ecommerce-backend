import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
const ViewProduct = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    async function getProduct() {
      const url = "http://localhost:8000/api/v1/product/viewprodect";
      const data = await axios.get(url);
      const productArr = [];
      data.data.data.map((item) => {
        console.log(item.regularPrice);

        const oembedRegex = /<oembed[^>]*>/g;
        const oembedMatch = item?.description?.match(oembedRegex);
        if (oembedMatch) {
          const oembedUrl = oembedMatch[0].match(/url="([^"]*)"/)[1];
          const iframeElement = `<iframe src="${`https://www.youtube.com/embed/${
            oembedUrl.split("v=")[1]
          }`}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          item.description = item.description.replace(
            oembedRegex,
            iframeElement
          );
        }
        productArr.push({
          key: item._id,
          name: item.name,
          regularPrice: item.regularPrice,
          discount: item.discount,
          description: item.description,
          image: item.image,
        });
      });
      setProductList(productArr);
    }
    getProduct();
  }, []);

  const dataSource = productList;

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Regular Price",
      dataIndex: "regularPrice",
      key: "regularPrice",
    },
    {
      title: "Discount Price",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (_, record) => (
        <div dangerouslySetInnerHTML={{ __html: record.description }}></div>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => (
        <img
          width={30}
          src={`http://localhost:8000/${record.image}`}
          alt="product"
        />
      ),
    },
  ];
  return <Table dataSource={dataSource} columns={columns} />;
};

export default ViewProduct;
