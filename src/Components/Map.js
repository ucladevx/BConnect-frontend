import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const KEY = process.env.REACT_APP_API_KEY;

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `650px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>

  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 34.073, lng: -118.4496559 }}
  > 
    {props.markers.map(({lat, lng}, i)=>{
    return <Marker key={i} position={{lat, lng}} />
  })}
    
    <Marker  position={{lat: 34.073, lng: -118.4496559}}  />
  </GoogleMap>

)

export default MapComponent;

