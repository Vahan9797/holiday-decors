import React from "react";
import { Layout, Menu, Image } from "antd";
import logo from '../../../public/logo.ico';
const { Header } = Layout;

export default () => (
  <Header>
    <div className="header-container">
      <Image src={logo} width={'40px'} height={'40px'}/>
      <Menu theme="dark"
        mode="horizontal"
        style={{ width: '600px', marginLeft: '15px' }}
        defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Our Services</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </div>
  </Header>
);
