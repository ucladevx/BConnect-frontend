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
  <React.Fragment>41.257160, -95.995102
    {(props.useCurLoc) ?  
        <GoogleMap defaultZoom={16} defaultCenter={{ lat: props.locObj.lat, lng: props.locObj.lng}}> 
            <Marker  position={{lat: props.locObj.lat, lng: props.locObj.lng}}  />
        </GoogleMap> 
    :  
        <GoogleMap defaultZoom={3} defaultCenter={{ lat: 41.257160, lng: -95.995102}}> 
            <Marker draggable onMouseUp={(e)=>{console.log(e)}}
                    position={{lat: 41.257160,lng: -95.995102}}  
            />
        </GoogleMap>}
  </React.Fragment>

)

export default LocationSelect;

/* 
gets geolocation but market position doesn't change: 
    onDragEnd={(e)=>{props.setLoc({lat: e.latLng.lat(), lng: e.latLng.lng()})}}
gets geolocation on mouseup, position changes, potentially buggy: 
    onMouseUp={(e)=>{props.setLoc({lat: e.latLng.lat(), lng: e.latLng.lng()})}}
*/

