import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function Nearby(props){
    const classes = useStyles();
    //make 'right' style depending on whether filtering tab is open
    return (
        <div className={classes.main} style={{right: '279px'}}>
           <div className={classes.content}>
               <h3 className={classes.nearText}>Near You</h3>
                {props.people.map((person, i)=>{
                    return <div className={classes.tempBox}>
                        <h3 className={classes.tempName}>{person.name}</h3>
                        <div className={classes.tempPic}> </div>
                    </div>
                })}
           </div>
        </div>
    )
}

export default Nearby;

const useStyles = makeStyles((theme) => ({ 
 main: {
   width: '240px',
   height: '100%',
   position: 'absolute',
   backgroundColor: '#5791BF',
   borderTopLeftRadius: '14px',
   borderBottomLeftRadius: '14px',
   fontFamily: 'Avenir',
   fontStyle: 'normal'
 },
 tempBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
 },
 tempName: {
    fontWeight: '800',
    fontSize: '16px',
    lineHeight: '60px',
    color: '#F9D149',
    marginBottom: '-5px'
 },
 tempPic: {
    backgroundColor: '#C4C4C4',
    height: '109px',
    width: '109px',
    borderRadius: '50%'
 },
 content: {
     display: 'flex',
     flexDirection: 'column',
     overflow: 'scroll',
     alignItems: 'center',
     height: '100%'
 },
 nearText: {
    fontWeight: '800',
    fontSize: '20px',
    lineHeight: '60px',
    color: 'white',
    marginTop: '40px',
    marginBottom: '-15px'
 }
}))