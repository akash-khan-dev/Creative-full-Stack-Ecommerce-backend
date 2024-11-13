import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import { Select } from "antd";

const FlashSale = () => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [showProduct, setShowProduct] = useState([]);
  const [selectProduct, setSelectProduct] = useState("");

  //======== for select product
  const handleChange = (value) => {
    setSelectProduct(value);
  };
  //   =======for set time function=======
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const url = "http://localhost:8000/api/v1/product/addFlashSale";
      const data = await axios.post(url, {
        time: date + " " + time,
        productList: selectProduct,
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
      setLoading(false);
    }
  };

  //   ============for show all product

  const getAllProduct = async () => {
    try {
      const url = "http://localhost:8000/api/v1/product/viewprodect";
      const data = await axios.get(url);
      const tempArr = [];
      data.data.data.map((item) => {
        tempArr.push({ value: item._id, label: item.name });
      });
      setShowProduct(tempArr);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div>
        <h2>Add Flash Time</h2>
        <label style={{ marginRight: "20px" }} htmlFor="">
          Date
        </label>
        <input
          onChange={(e) => setDate(e.target.value)}
          style={{ marginRight: "20px" }}
          type="date"
        />
        <label style={{ marginRight: "20px" }} htmlFor="">
          Time
        </label>
        <input onChange={(e) => setTime(e.target.value)} type="time" />
        <Button
          style={{ marginLeft: "20px" }}
          onClick={handleSubmit}
          type="primary"
          loading={loading}
          disabled={loading}
          htmlType="submit"
        >
          Submit
        </Button>
        <Select
          mode="multiple"
          placeholder="Please select"
          onChange={handleChange}
          style={{
            width: "50%",
            display: "block",
            marginTop: "20px",
          }}
          options={showProduct}
        />
      </div>
    </>
  );
};

export default FlashSale;
