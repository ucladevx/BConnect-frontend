import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function Profile(props){
    const classes = useStyles();

    return (
        <div className={classes.main} style={{right: '279px'}}>
           
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
        zIndex: '2'
    }
}))