import React, {Component} from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const KEY = "AIzaSyAsRAeb-uUlPUUY-Es0O2rm1Pr3DkAGd0g";

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>

  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 34.073, lng: -118.4496559 }}
  >
      <Marker  position={{lat: 34.073, lng: -118.4496559}}  />
  </GoogleMap>

)

export default MapComponent;