import React, { useEffect, useState } from "react";
import { PlayCircleOutlined, HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import "./navbar.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchData } from "../../Service/GetServices";

// submenu keys of first level
const SideNavBar = ({ className }) => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const getData = fetchData();
    getData.then((res) => setdata(res?.data?.data || []));
  }, []);

  const items = [
    {
      key: "Home",
      icon: <HomeOutlined />,
      label: "Home",
      onClick: () => navigate("/home"),
    },
    ...data.map((item, index) => {
      return {
        key: index,
        icon: <PlayCircleOutlined />,
        label: item?.name,
        onClick: () => setSearchParams({ service: item?._id }),
      };
    }),
  ];

  return (
    <>
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode={"vertical"}
        theme={"dark"}
        items={items}
        className={`sideNavbar ${className}`}
      />
    </>
  );
};
export default SideNavBar;
