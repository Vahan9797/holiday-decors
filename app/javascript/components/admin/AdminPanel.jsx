import { Layout } from "antd";
import React from "react";
import Gallery from "../Home/Gallery";
import FindUs from '../Home/FindUs';

const { Header, Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content className="background-christmas">
      <div className="site-layout-content">
        <h1 className="glow">Holiday Decorations</h1>
        <Gallery />
      </div>
      <FindUs />
      <SendMessageModal />
    </Content>
    <div className="footer-container">
      <Footer style={{ padding: '5px 25px', textAlign: 'center' }}><span className="glow">Holiday decorations ©2021.</span></Footer>
    </div>
  </Layout>
);