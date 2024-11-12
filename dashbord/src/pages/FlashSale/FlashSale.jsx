import { Button } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

const FlashSale = () => {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async () => {
    try {
      console.log(date + " " + time);
      const url = "http://localhost:8000/api/v1/product/addFlashSale";
      const data = await axios.post(url, {
        time: date + " " + time,
      });
      console.log(data);
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
    }
  };

  return (
    <>
      <div>
        <h2>Add Flash Time</h2>
        <input onChange={(e) => setDate(e.target.value)} type="date" />
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
      </div>
    </>
  );
};

export default FlashSale;
