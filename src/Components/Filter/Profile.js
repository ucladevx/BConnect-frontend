import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import PlaceIcon from '@material-ui/icons/Place';
import YouTubeIcon from '@material-ui/icons/YouTube';

function Profile(props){
    const classes = useStyles();
    const [edit, changeMode] = useState(false)
    console.log(props.user)

    return (
        <div className={classes.main} style={{right: '250px'}}>
            <div className={classes.editBar}>
                <p className={classes.edit} onClick={()=>{changeMode(!edit)}} >Edit</p>
                <CreateOutlinedIcon style={{height: '20px'}}/>
            </div>
            <h3 className={classes.labelText} style={{marginTop: '-8px'}}>Hey there,</h3>
            <h1 className={classes.name}>Placeholder</h1>
            <div className={classes.locationBox}>
                <PlaceIcon className={classes.placeIcon}/>
                <div className={classes.locationTextBox}>
                    <h3 style={{margin: '0', fontSize: '24px'}}>My Current Location</h3>
                    <p style={{margin: '0', color: '#5791BF', fontSize: '16px'}}>Placeholder Location</p>
                </div>
            </div>
            <div>
                <div className={classes.infoPair}>
                    <h3 className={classes.labelText}>Age</h3>
                    <div className={classes.infoBox}>21</div>
                </div>
                <div className={classes.infoPair}>
                    <h3 className={classes.labelText}>Gender</h3>
                    <div className={classes.infoBox}>Male</div>
                </div>
                <div className={classes.infoPair}>
                    <h3 className={classes.labelText}>Class of</h3>
                    <div className={classes.infoBox}>2022</div>
                </div>
                <div className={classes.infoPair}>
                    <h3 className={classes.labelText}>Major</h3>
                    <div className={classes.infoBox}>Computer Science</div>
                </div>
            </div>
            <h3 className={classes.labelText}>Current Job</h3>
            <div className={classes.infoBox}>Software Engineer at Microsoft</div>
            <div >
                <h3 className={classes.labelText}>Connect</h3>
                <div className={classes.socialBox}>
                    <YouTubeIcon className={classes.tempIcon}/>
                    <p>LinkedIn</p>
                </div>
                <div className={classes.socialBox}>
                    <YouTubeIcon className={classes.tempIcon}/>
                    <p>Twitter</p>
                </div>
                <div className={classes.socialBox}>
                    <YouTubeIcon className={classes.tempIcon}/>
                    <p>Instagram</p>
                </div>
                <div className={classes.socialBox}>
                    <YouTubeIcon className={classes.tempIcon} />
                    <p>Facebook</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;

const useStyles = makeStyles((theme) => ({ 
    main: {
        position: 'absolute',
        height: '100%',
        width: '470px',
        backgroundColor: '#2D75AF',
        borderRadius: '30px',
        zIndex: '2',
        overflow: 'scroll',
        padding: '40px',
    },
    editBar: {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    edit: {
        cursor: 'pointer',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '12px',
        textDecoration: 'underline',
        fontWeight: '500',
        marginRight: '6px'
    },
    labelText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '24px',
        fontWeight: '800',
        color: '#F9D148',
        textAlign: 'center'
    }, 
    name: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '60px',
        fontWeight: '800',
        color: 'white',
        textAlign: 'center',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginTop: '-10px'
    },
    locationBox: {
        backgroundColor: '#225883',
        borderRadius: '12px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        height: '72px'
    },
    locationTextBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    placeIcon: {
        color: '#F9D048', 
        height: '50px', 
        width: '43px',
        marginLeft: '15px',
        marginRight: '15px'
    },
    infoBox: {
        backgroundColor: '#225883',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '300',
        padding: '16px'
    },
    socialBox: {
        backgroundColor: '#225883',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '300',
        padding: '10px',
        display: 'flex',
        marginTop: '24px'
    },
    tempIcon: {
        height: '46px',
        width: '42px',
        color: 'orange',
        marginLeft: '10px',
        marginRight: '15px'
    }
}))