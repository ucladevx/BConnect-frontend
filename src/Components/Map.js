import React from 'react'
import { compose, withProps } from "recompose"
import Paper from '@material-ui/core/Paper';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import {withRouter} from 'react-router-dom'

const KEY = process.env.REACT_APP_API_KEY;

//TODO:
//to display info about other users, click on markers to render custom <InfoWindow /> , 
//or render side bar that shows corresponding user info w/ links etc.
//https://tomchentw.github.io/react-google-maps/#infowindow
//https://material-ui.com/components/drawers/ (perhaps)

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%`, width: '100%', margin: '0'}} />,
    containerElement: <div style={{ height: `100vh`, width: '100%', margin: '0', zIndex:'-1'}} />,
    mapElement: <div style={{ height: `100%`, width: '100%', margin: '0'}} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <React.Fragment>
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{ lat: 34.073, lng: -118.4496559 }}
    > 
      {props.markers.map(({lat, lng}, i)=>{
      return <Marker key={i} position={{lat, lng}} />
    })}
    </GoogleMap>
  </React.Fragment>

)

export default withRouter(MapComponent);

