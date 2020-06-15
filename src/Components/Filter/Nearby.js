import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Nearby(props){
    const classes = useStyles();
    let w = (props.filter===true && props.switchMode===false) ? '280px' : 
                    ((props.filter===false && props.switchMode===false) ? '240px' : '380px')
    return (
        <div className={classes.main} style={props.appear===true ? {display: 'block'} : {display: 'none'},
            props.filter===true ? {right: '711px', width: props.switchMode===true ? '360px' : '280px'} : 
                {right: '279px', width: props.switchMode===true ? '360px' : '240px'}}>
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
                <div className={classes.content} style={{width: '360px'}}>
                    <h3 className={classes.nearText} style={props.filter===true ? {fontSize: '40px'} : {fontSize: '20px'}, 
                        {marginBottom: '15px'}}>Near You</h3>
                    {props.people.map((person, i)=>{
                        return <div key={i} className={classes.onFilterBox}>
                            <div className={classes.tempPic}> </div>
                            <div className={classes.onFilterContent}>
                                <div className={classes.topBox}>
                                    <h3 className={classes.onFilterName}>{person.name}</h3>
                                    <h4 className={classes.onFilterText} 
                                        style={{color: '#9FC9EB', fontWeight: '300', marginTop: '20px'}}>20 miles away</h4>
                                </div>
                                <div style={{width: '120px', marginTop: '10px'}}>
                                    <h4 className={classes.onFilterText} style={{color: '#F9D149'}}>Also interested in...</h4>
                                    <p className={classes.onFilterText} style={{fontWeight: '300'}}>Baking, Tennis, Swimming, Chess</p>
                                </div>
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
    borderRadius: '50%',
    cursor: 'pointer'
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
     alignAligns: 'center',
     height: '100%'
 },
 onFilterBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '30px',
    width: '262px',
    marginRight: '20px'
 },
 onFilterText: {
     margin: '0px',
     fontSize: '12px',
     color: 'white',
 },
 topBox: {
     display: 'flex',
     flexDirection: 'column',
     overflow: 'hidden'
 },
 onFilterName: {
    fontWeight: '800',
    fontSize: '16px',
    color: '#F9D149',
    margin: '0',
    marginBottom:'5px',
    position: 'absolute',
    left: '180px',
    cursor: 'pointer'
 }
}))