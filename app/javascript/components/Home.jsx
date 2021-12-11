import { Layout, Row, Col, Image, Carousel } from "antd";
import React from "react";
import Header from "./Header";
import GoogleMaps from "./GoogleMaps";
import img from '../../../public/christmas.jpg';
import { SendMessageContextProvider } from "../contexts/SendMessageContext";
import SendMessageModal from 'components/SendMessage';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

const IconUmbrella = () => (
  <svg className="umbrella" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" aria-labelledby="title">
    <title id="title">Umbrella Icon</title>
      <path d="M27 14h5c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0zM27 14c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2v0 14c0 1.112-0.895 2-2 2-1.112 0-2-0.896-2-2.001v-1.494c0-0.291 0.224-0.505 0.5-0.505 0.268 0 0.5 0.226 0.5 0.505v1.505c0 0.547 0.444 0.991 1 0.991 0.552 0 1-0.451 1-0.991v-14.009c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-1.105-1.119-2-2.5-2s-2.5 0.895-2.5 2c0-5.415 6.671-9.825 15-9.995v-1.506c0-0.283 0.224-0.499 0.5-0.499 0.268 0 0.5 0.224 0.5 0.499v1.506c8.329 0.17 15 4.58 15 9.995h-5z"/>
    </svg>
  )

const googleMapCoords = {
  lat: 40.730610,
  lng: -73.935242
}

export default () => (
  <Layout className="layout">
    <SendMessageContextProvider>
      <Header />
      <Content className="background-christmas">
        <div className="site-layout-content">
          <h1 className="glow">Holiday Decorations</h1>
          <div className="gallery-container">
            <div className="gallery-title blue-glow">Image Gallery Of Our Works</div>
            <div className="images-container">
              <Carousel
                autoplay={true}
                arrows
                prevArrow={<CaretLeftOutlined width={'32px'} height={'32px'}/>}
                nextArrow={<CaretRightOutlined width={'32px'} height={'32px'}/>}
                >
                  { [...Array(50)].map(() => <Image src={img} placeholder={true} style={{ width: "95%", height: "100%" }}></Image>) }
              </Carousel>
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
          <SendMessageModal />
      </Content>
    </SendMessageContextProvider>
    <div className="footer-container">
      <Footer style={{ padding: '5px 25px', textAlign: 'center' }}><span className="glow">Holiday decorations ©2021.</span></Footer>
    </div>
  </Layout>
);