import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const KEY = process.env.REACT_APP_API_KEY;

const LocationSelect = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px`}} />,
    mapElement: <div style={{ height: `100%`}} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <React.Fragment>
    <Typography >
        Use your current location
            <Switch checked={props.useCurLoc} onChange={()=>{props.set(!props.useCurLoc) }} color='primary' />
          {props.useCurLoc===false ? "(Please select your current location)" : null}
    </Typography>
    {(props.useCurLoc) ?  
        <GoogleMap defaultZoom={16} defaultCenter={{ lat: props.locObj.lat, lng: props.locObj.lng}}> 
            <Marker  position={{lat: props.locObj.lat, lng: props.locObj.lng}}  />
        </GoogleMap> 
    :  
      <React.Fragment>
    
        <GoogleMap defaultZoom={3} defaultCenter={{ lat: 41.257160, lng: -95.995102}} 
          onClick={(e)=>{props.setClick(true); props.setLoc({lat: e.latLng.lat(), lng: e.latLng.lng()})}}
          > 
           {props.hasClicked ? <Marker  position={{lat: props.locObj.lat, lng: props.locObj.lng}}  /> : null}
        </GoogleMap>
      </React.Fragment>
      }
  </React.Fragment>

)

export default LocationSelect;

// <Typography variant="h6" style={{textAlign: 'center', margin: '14px', position: 'absolute'}}>Please select your current location on the map</Typography>


