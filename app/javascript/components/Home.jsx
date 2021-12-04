import { Layout, Row, Col, Image } from "antd";
import React from "react";
import Header from "./Header";
import img from '../../../public/christmas.jpg';

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content>
      <div className="site-layout-content background-christmas">
        <h1>Holiday Decors</h1>
        <Row>
          <Col xs={24} md={12} lg={6}>
            <Image src={img} placeholder={true} style={{ width: "250px", height: "250px" }}></Image>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Image src={img} placeholder={true} style={{ width: "250px", height: "250px" }}></Image>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Image src={img} placeholder={true} style={{ width: "250px", height: "250px" }}></Image>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Image src={img} placeholder={true} style={{ width: "250px", height: "250px" }}></Image>
          </Col>
        </Row>
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>Holiday decors ©2021.</Footer>
  </Layout>
);