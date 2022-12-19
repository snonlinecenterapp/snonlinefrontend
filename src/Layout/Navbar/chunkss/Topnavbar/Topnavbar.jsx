import React from "react";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./topnavbar.scss";
import { logo } from "../../../../helper/icon-path";
const TopNavbar = ({ onclick, navExpand }) => {
  const { Header } = Layout;
  
  const navItems = [
    { key: 1, label: <img src={logo} alt="logo" className="topNavbar__logo"/> },
    {
      key: 1,
      label: navExpand ? (
        <MenuUnfoldOutlined
          style={{ fontSize: "32px", color: "#08c" }}
          onClick={onclick}
        />
      ) : (
        <MenuFoldOutlined
          style={{ fontSize: "32px", color: "#08c" }}
          onClick={onclick}
        />
      ),
    },
    { key: 1, label: "Home" },
    { key: 1, label: "About" },
    { key: 1, label: "Contact Us" },
    { key: 1, label: "Privacy Policy" },
  ];
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={navItems.map((item, index) => {
            return {
              key: index,
              label: item.label,
            };
          })}
          className="topNavbar__header"
        />
      </Header>
    </Layout>
  );
};
export default TopNavbar;
