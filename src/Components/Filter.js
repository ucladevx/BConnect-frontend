import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';

function Filter(){
    let history = useHistory();
    const classes = useStyles();

    const [settings, changeSettings] = useState(false)

    return (
        <div className={classes.main}>
            <div className={classes.content}>
                <img className={classes.logo} src="logo.png" />
                <h3 className={classes.basicText}>Filter By</h3>
                <h3 className={classes.basicText}>Profile</h3>
                <div style={{bottom: '25px', position: 'absolute'}}>
                    <div className={classes.settingsBox} style={settings ? {display: 'block'} : {display: 'none'}}>
                        <h3 className={classes.basicText}>Log out</h3>
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
    backgroundColor: '#225883',
    top: '0',
    right: '0',
    position: 'absolute',
    width: '279px',
    height: '100%',
    zIndex: '1',
    fontFamily: 'Avenir',
    fontStyle: 'normal'
 },
 content: {
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center'
 },
 basicText: {
    fontWeight: '800',
    fontSize: '16px',
    textAlign: 'center',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: '50px'
 },
 logo: {
     width: '146px',
     height: '201px',
     marginTop: '44px',
     marginBottom: '25px'
 },
 settingsBox: {
     animation: '1'
 }
}))