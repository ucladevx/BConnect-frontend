import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Nearby from './Nearby'
import Profile from './Profile'
import Filter from './Filter'

function FilterBar(props){
    let history = useHistory();
    const classes = useStyles();
    const [settings, changeSettings] = useState(false)
    const [profile, changeProfile] = useState(false)
    const [filter, changeFilter] = useState(false)

    const onFilterClick = () => {
        changeFilter(!filter)
        changeProfile(false)
    }


    const onProfileClick = () => {
        changeProfile(!profile)
        changeFilter(false)
    }

    return (
        <div className={classes.main}>
            {profile===true ? <Profile /> : <Nearby people={props.markers} filter={filter} />}
            {filter ===true ? <Filter /> : null }
            <div className={classes.bar} style={(profile===true || filter===true) ? {width: '320px'} : {width: '279px'}}>
                <div className={classes.content}>
                    <img className={classes.logo} src="logo.png" />
                    <h3 onClick={onFilterClick} className={classes.basicText}>Filter By</h3>
                    <h3 className={classes.basicText} onClick={onProfileClick}>Profile</h3>
                    <div style={{bottom: '25px', position: 'absolute'}}>
                        <div className={classes.settingsBox}
                            style={settings ? {visibility: 'visible', opacity: '1'} : {visibility: 'hidden', opacity: '0'}}>
                            <h3 className={classes.basicText} onClick={props.logout}>Log out</h3>
                        </div>
                        <h3 className={classes.basicText} onClick={()=> changeSettings(!settings)}>Settings</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar;

const useStyles = makeStyles((theme) => ({ 
 main: {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '1'
 },
 bar: {
    position: 'absolute',
    backgroundColor: '#225883',
    height: '100%',
    right: '0',
 },
 content: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    right: '0',
    width: '279px',
    height: '100%',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    zIndex: '2'
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