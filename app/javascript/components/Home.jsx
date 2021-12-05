import { Layout, Row, Col, Image } from "antd";
import React from "react";
import Header from "./Header";
import GoogleMaps from "./GoogleMaps";
import img from '../../../public/christmas.jpg';

const { Content, Footer } = Layout;

const googleMapCoords = {
  lat: 40.730610,
  lng: -73.935242
}

export default () => (
  <Layout className="layout">
    <Header />
    <Content className="background-christmas">
      <div className="site-layout-content">
        <h1 className="glow">Holiday Decorations</h1>
        <div className="gallery-container">
          <div className="gallery-title blue-glow">Image Gallery Of Our Works</div>
          <div className="images-container">
            {[...Array(7)].map((_, i) => {
              return (
                <Row key={i}>
                  {[...Array(4)].map((_, i) => {
                    return (
                      <Col key={i} xs={24} md={12} lg={6}>
                        <Image src={img} placeholder={true} style={{ width: "95%", height: "100%" }}></Image>
                      </Col>
                    )
                  })}
                </Row>
              )
            })}
          </div>
        </div>
      </div>
      <div className="find-us">
        <div className="contact-info-container">
          <span className="green-glow">{
            '[HERE CAN BE YOUR TEXT FOR CONTACTS AND ADDRESS AND THE VERY BEST WISHES ' +
            'YOU SEND TO THE POTENTIAL CUSTOMERS]'
            }
          </span>
        </div>
        <div className="google-maps-container">
          <GoogleMaps initalCenter={googleMapCoords}/>
        </div>
      </div>
    </Content>
    <div className="footer-container">
      <Footer style={{ padding: '5px 25px', textAlign: 'center' }}><span className="glow">Holiday decorations ©2021.</span></Footer>
    </div>
  </Layout>
);