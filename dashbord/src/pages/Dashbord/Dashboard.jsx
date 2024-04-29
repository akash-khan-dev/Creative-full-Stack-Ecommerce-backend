import { Col, Row, Menu } from "antd";
import {
  UserOutlined,
  ProductFilled,
  PercentageOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("User", "sub1", <UserOutlined />, [
      getItem("Add User", "1"),
      getItem("View Users", "2"),
    ]),
    {
      type: "divider",
    },
    getItem("Product", "sub2", <ProductFilled />, [
      getItem("Add Product", "3"),
      getItem("View Product", "4"),
    ]),
    {
      type: "divider",
    },
    getItem("Category", "sub3", <ProductFilled />, [
      getItem("Add Category", "/dashboard/add-category"),
      getItem("View Category", "/dashboard/view-category"),
      getItem("Add Subcategory", "/dashboard/add-sub-category"),
      getItem("View Subcategory", "/dashboard/view-sub-category"),
    ]),
    {
      type: "divider",
    },
    getItem("Discount", "sub4", <PercentageOutlined />, [
      getItem("Add Discount", "9"),
      getItem("View Discount", "10"),
    ]),
  ];
  const onClick = (e) => {
    navigate(e.key);
  };
  return (
    <>
      <Row>
        <Col span={6}>
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </Col>
        <Col span={17}>
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
