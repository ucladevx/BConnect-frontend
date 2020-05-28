import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Nearby from './Nearby'

function Filter(props){
    let history = useHistory();
    const classes = useStyles();
    const [settings, changeSettings] = useState(false)

    return (
        <div className={classes.main}>
            <Nearby people={props.markers}  />
            <div className={classes.content}>
                <img className={classes.logo} src="logo.png" />
                <h3 className={classes.basicText}>Filter By</h3>
                <h3 className={classes.basicText}>Profile</h3>
                <div style={{bottom: '25px', position: 'absolute'}}>
                    <div className={classes.settingsBox}
                         style={settings ? {visibility: 'visible', opacity: '1'} : {visibility: 'hidden', opacity: '0'}}>
                        <h3 className={classes.basicText} onClick={props.logout}>Log out</h3>
                    </div>
                    <h3 className={classes.basicText} onClick={()=> changeSettings(!settings)}>Settings</h3>
                </div>
                
            </div>
        </div>
    )
}

export default Filter;

const useStyles = makeStyles((theme) => ({ 
 main: {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '1'
 },
 content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#225883',
   
    width: '279px',
    height: '100%',
    fontFamily: 'Avenir',
    fontStyle: 'normal'
 },
 basicText: {
    fontWeight: '800',
    fontSize: '16px',
    textAlign: 'center',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: '50px',
    cursor: 'pointer'
 },
 logo: {
    width: '146px',
    height: '201px',
    marginTop: '44px',
    marginBottom: '25px'
 },
 settingsBox: {
    transition: 'visibility 0s, opacity 0.2s linear',
 }
}))