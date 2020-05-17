import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function InterestsForm(props) {
const [interest, changeInterest] = React.useState("");
const classes = useStyles();

let submitAction = (e) => {
  e.preventDefault();
  props.setInterests([...props.interests, interest]); 
  changeInterest("");
}

  return (
    <div>
      <Typography className={classes.text} variant="h6" gutterBottom>
        Tell us about your <span style={{color: '#F9D149'}}>interests</span> and  
          <span style={{color: '#F9D149'}}> hobbies</span>.
      </Typography>
      <div>
          <form onSubmit={submitAction}>
            <input value={interest} autoComplete="off" onChange={(e)=>{changeInterest(e.target.value)}} name="interests"
              placeholder=" Search" className={classes.input}/>
          </form>
       
        <div style={{display: 'flex', margin: '17px'}}>
         {props.interests.map((interest, i)=>{
            return  <Chip key={i} className={classes.chip} label={interest}  
                    variant="outlined" onDelete={()=>{console.log("delete me!")}}/>
            })}
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles(theme => ({ 
  text: {
    color: 'white',
    marginTop: '10px',
    marginBottom: '25px',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '40px',
    lineHeight: '40px',
  },
  chip: {
    backgroundColor: '#9FC9EB',
    padding: '20px',
    margin: '5px',
    border: 'none',
    color: 'white',
    fontSize: '17px',
    fontWeight: '600',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    borderRadius: '25px',

  },
  input: {
    width: '730px',
    height: '35px',
    border: '1px solid white',
    padding: '8px',
    color: 'white',
    fontSize:' 15px',
    background: 'rgba(255,255,255,.2)',
    outline: 'none',
    '&::placeholder': {
      color: 'white',
      fontSize: '14px',
      paddingLeft: '0px'
    },
  }
}))

export default InterestsForm;



