import { Col, Row, Menu } from "antd";
import {
  UserOutlined,
  ProductFilled,
  PercentageOutlined,
  ProfileFilled,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((user) => user.user.value);

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
    userInfo.role != "User" &&
      getItem("User", "sub1", <UserOutlined />, [
        getItem("Add User", "1"),
        getItem("View Users", "2"),
      ]),
    userInfo.role != "User" &&
      getItem("Product", "sub2", <ProductFilled />, [
        getItem("Add Product", "/dashboard/add-product"),
        getItem("Add Flash Product", "/dashboard/add-flash"),
        getItem("View Product", "/dashboard/view-product"),
      ]),
    userInfo.role != "User" &&
      getItem("Category", "sub3", <ProductFilled />, [
        getItem("Add Category", "/dashboard/add-category"),
        getItem("View Category", "/dashboard/view-category"),
        getItem("Add Subcategory", "/dashboard/add-sub-category"),
        getItem("View Subcategory", "/dashboard/view-sub-category"),
      ]),
    userInfo.role != "User" &&
      getItem("Discount", "sub4", <PercentageOutlined />, [
        getItem("Add Discount", "9"),
        getItem("View Discount", "10"),
      ]),
    userInfo.role == "User" &&
      getItem("My Profile", "sub5", <ProfileFilled />, [
        getItem("Purchase Details", "11"),
        getItem("Profile", "12"),
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
