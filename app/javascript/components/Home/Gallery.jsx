import React, { useReducer, useEffect } from "react";
import { Image, Carousel, Spin } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
//import img from '../../../../public/christmas.jpg';
import axios from 'axios';
import { SERVER_API_ENDPOINT } from '../../constants/variables';

const imageReducer = (state, action) => {
  switch (action.type) {
    case 'isLoading':
      return { images: state.images, loading: true };
    case 'isLoaded':
      return { images: action.images, loading: false };
    default:
      throw new Error();
  }
}

function Gallery() {
  const [gallery, dispatch] = useReducer(imageReducer, { images: [], loading: false });

  useEffect(() => {
    dispatch({ type: 'isLoading' })
    axios.get(SERVER_API_ENDPOINT('images?page=1')).then(response => {
      console.log(response);
      response?.images && dispatch({ type: 'isLoaded', images: response.images })
    })
  }, [])

  return (
    <div className="gallery-container">
    <div className="gallery-title blue-glow">Image Gallery Of Our Works</div>
      <div className="images-container">
        {gallery.loading && <Spin size="large" />}
        {!gallery.loading && <Carousel
          autoplay={true}
          arrows
          prevArrow={<CaretLeftOutlined />}
          nextArrow={<CaretRightOutlined />}
          >
            { gallery?.images?.map(() => <Image src={img} placeholder={true} style={{ width: "95%", height: "100%" }}></Image>) }
        </Carousel>}
      </div>
    </div>
  )
}

export default Gallery;