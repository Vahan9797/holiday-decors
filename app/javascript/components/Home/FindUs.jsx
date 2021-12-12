import React from "react"
import GoogleMaps from "../google/GoogleMaps";

const googleMapCoords = {
  lat: 40.730610,
  lng: -73.935242
}

const FindUs = () => {
  return (
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
  )
}

export default FindUs;