import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Nearby(props){
    const classes = useStyles();
    let w = (props.filter===true && props.switchMode===false) ? '280px' : 
                    ((props.filter===false && props.switchMode===false) ? '240px' : '380px')
    return (
        <div className={classes.main} style={props.appear===true ? {display: 'block'} : {display: 'none'},
            props.filter===true ? {right: '711px', width: '280px'} : {right: '279px', width: '240px'}}>
           {props.switchMode===false ?
                <div className={classes.content}>
                    <h3 className={classes.nearText}>Near You</h3>
                    {props.people.map((person, i)=>{
                        return <div key={i} className={classes.tempBox}>
                            <h3 className={classes.tempName}>{person.name}</h3>
                            <div className={classes.tempPic}> </div>
                        </div>
                    })}
                </div>
            :
                <div className={classes.content} style={{width: '380px'}}>
                    <h3 className={classes.nearText} style={{fontSize: '40px'}}>Near You</h3>
                    {props.people.map((person, i)=>{
                        return <div key={i} className={classes.onFilterBox}>
                            <div className={classes.tempPic}> </div>
                            <div className={classes.onFilterContent}>
                                <h3 className={classes.tempName} style={{margin: '0px', marginBottom: '-15px'}}>{person.name}</h3>
                                <h4 className={classes.onFilterText} style={{color: '#9FC9EB'}}>20 miles away</h4>
                                <h4 className={classes.onFilterText} style={{color: '#F9D149'}}>Also interested in...</h4>
                                <p className={classes.onFilterText} >Baking, Tennis, Swimming, Chess</p>
                            </div>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}

export default Nearby;

const useStyles = makeStyles((theme) => ({ 
 main: {
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
     width: '240px',
     position: 'absolute',
     left: '0',
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
    marginTop: '35px',
    marginBottom: '-15px'
 },
 onFilterContent: {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignAligns: 'center'
 },
 onFilterBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px'
 },
 onFilterText: {
     margin: '0px',
     fontSize: '12px',
     color: 'white',
 }
}))