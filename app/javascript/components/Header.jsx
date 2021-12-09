import React, { useContext } from "react";
import { Layout, Menu, Image } from "antd";
import logo from '../../../public/logo.ico';
import { SendMessageContext } from '../contexts/SendMessageContext';
const { Header } = Layout;

export default () => {
  const [visible, setVisible] = useContext(SendMessageContext);

  return (
    <Header style={{ height: '50px', position: 'fixed', left: 0, top: 0, right: 0, zIndex: 2 }}>
      <div className="header-container">
        <Image src={logo} width={'40px'} height={'40px'}/>
        <Menu theme="dark"
          mode="horizontal"
          style={{ width: '600px', marginLeft: '15px' }}
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item style={{ display: 'flex', alignItems: 'center' }} key="1">Home</Menu.Item>
          <Menu.Item
            style={{ display: 'flex', alignItems: 'center' }}
            key="2"
            onClick={() => !visible && setVisible(true)}>
              Send A Message
          </Menu.Item>
          <Menu.Item style={{ display: 'flex', alignItems: 'center' }} key="3">Contact Us</Menu.Item>
        </Menu>
      </div>
    </Header>
  )
}
