import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';

function InterestsForm(props) {
const classes = useStyles();

const interests = { "Food Drink":["Baking", "Cooking", "Trying new foods", "Wine tasting", "Vegan", "Vegetarian"],
                    "Arts Entertainment":["Reading and writing", "Going to concerts", "Photography",
                        "Watching Movies", "Drawing and Painting", "Dancing", "Singing", "Playing an instrument"],
                    "Sports Activites": ["Hiking", "Exploring", "Backpacking", "Camping", "Working out", "Tennis",
                        "Basketball", "Yoga", "Biking", "Running", "Swimming", "Rock climbing", "Baseball", "Football", "Soccer"],
                    "Puzzles Games": ["Video games", "Board games", "Trivia", "Chess", "Puzzles", "Escape rooms"]}

const and = "&"

  return (
    <div >
      <Typography className={classes.text} variant="h6" gutterBottom>
        Tell us about your <span style={{color: '#F9D149'}}>interests</span> and  
          <span style={{color: '#F9D149'}}> hobbies</span>.
      </Typography>
      <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: '417px', marginLeft: '50px'}}>
        {Object.keys(interests).map((item, index)=>{
            return <div key={index} style={{width: '400px'}}>
                <h2 className={classes.categoryTitle}>{item.split(" ")[0]} <span style={{color: '#F9D149'}}>{and}</span> {item.split(" ")[1]}</h2>
                  <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {interests[item].map((item2, index2)=>{
                        return <Chip key={index2} className={classes.chip} label={item2}  
                        variant="outlined" onClick={(e)=>{
                          if(props.interests.includes(item2)){
                            props.setInterests(props.interests.filter((it)=>{return it !== item2}))
                          } else {
                            props.setInterests([...props.interests, item2]);
                          }
                        }} style={props.interests.includes(item2) ? {backgroundColor:"#2d75b0"} : {backgroundColor: "#9FC9EB"}} />
                    })}
                  </div>
            </div>
        })}
      </div>
    </div>
  );
}

{/* <div style={{display: 'flex', margin: '17px'}}>
{props.interests.map((interest, i)=>{
   return  <Chip key={i} className={classes.chip} label={interest}  
           variant="outlined" onDelete={()=>{console.log("delete me!")}}/>
   })} */}

const useStyles = makeStyles(theme => ({ 
  text: {
    color: 'white',
    marginTop: '10px',
    marginBottom: '25px',
    marginLeft: '50px',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '40px',
    lineHeight: '40px',
  },
  chip: {
    padding: '10px',
    margin: '5px',
    border: 'none',
    color: 'white',
    fontSize: '14px',
    fontWeight: '500',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    borderRadius: '25px',
    transition: "backgroundColor .5",
  },
  categoryTitle: {
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    color: 'white'
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



