import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import { Spin } from "antd";

const LoadingContainer = () => {
  return (
    <Spin size="large" className="google-maps-spinner"/>
  )
}

const GoogleMaps = props => {
  return (
    <Map 
      google={props?.google}
      zoom={14}
      initalCenter={props.initalCenter}>
      <Marker name={'Current location'} />
      <InfoWindow>
          <div>
            <h1>{props?.selectedPlace?.name}</h1>
          </div>
      </InfoWindow>
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_KEY,
  LoadingContainer: LoadingContainer
})(GoogleMaps)