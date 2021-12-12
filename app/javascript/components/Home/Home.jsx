import { Layout } from "antd";
import React from "react";
import Header from "../partials/Header";
import GoogleMaps from "../google/GoogleMaps";
import { SendMessageContextProvider } from "../../contexts/SendMessageContext";
import SendMessageModal from '../partials/SendMessage';
import Gallery from "./Gallery";
import FindUs from './FindUs';

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <SendMessageContextProvider>
      <Header />
      <Content className="background-christmas">
        <div className="site-layout-content">
          <h1 className="glow">Holiday Decorations</h1>
          <Gallery />
        </div>
        <FindUs />
        <SendMessageModal />
      </Content>
    </SendMessageContextProvider>
    <div className="footer-container">
      <Footer style={{ padding: '5px 25px', textAlign: 'center' }}><span className="glow">Holiday decorations ©2021.</span></Footer>
    </div>
  </Layout>
);