import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';

function Filter(){
    let history = useHistory();
    const classes = useStyles();

    return (
        <div>

        </div>
    )
}

export default Filter;

const useStyles = makeStyles(theme => ({ 
 box: {

 }
}))