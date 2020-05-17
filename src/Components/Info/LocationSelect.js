import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import { withStyles } from "@material-ui/core/styles";

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
    <div style={{height: '86px', width: '421px', position: 'absolute', top: '50%', left: '50%',
        marginTop: `${props.useCurLoc===true ? '-97px' : '-43px'}`, marginLeft: '-210px', backgroundColor: 'rgb(45, 117, 176)', borderRadius: '10px',
        boxShadow: '6px 7px 31px -1px rgba(0,0,0,0.47)', padding: '5px', display: 'flex', justifyContent: 'space-around',
        alignItems: 'center'}}>
      <Typography style={{color: 'white', fontFamily: 'Avenir', fontType: 'normal', fontSize: '18px', fontWeight: '700'}}>
          Use my current location
      </Typography>
      <IOSSwitch checked={props.useCurLoc}  onChange={()=>{props.set(!props.useCurLoc)}} />
    </div>
    {(props.useCurLoc) ?  
        <GoogleMap  defaultZoom={16} defaultCenter={{ lat: props.locObj.lat, lng: props.locObj.lng}}> 
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


const IOSSwitch = withStyles(theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1)
  },
  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#5791BF",
        opacity: 1,
        border: "none"
      }
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff"
    }
  },
  thumb: {
    width: 19,
    height: 19,
    backgroundColor: "#F9D149",
    marginTop: "3px",
    marginLeft: "1px"
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: '#5791BF',
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"])
  },
  checked: {},
  focusVisible: {}
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  );
});