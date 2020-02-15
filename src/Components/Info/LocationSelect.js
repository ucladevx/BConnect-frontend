import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const KEY = process.env.REACT_APP_API_KEY;

const LocationSelect = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`}} />,
    mapElement: <div style={{ height: `100%`}} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <React.Fragment>
    {props.locObj ?  
        <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: props.locObj.lat, lng: props.locObj.lng}}
    > 
        <Marker  position={{lat: props.locObj.lat, lng: props.locObj.lng}}  />
    </GoogleMap> : <div></div>}
  </React.Fragment>

)

export default LocationSelect;
