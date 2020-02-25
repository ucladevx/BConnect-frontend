import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

function InterestsForm(props) {
const [interest, changeInterest] = React.useState("");

  return (
    <React.Fragment>
      <Typography style={{marginTop: '10px', marginBottom: '20px'}} variant="h6" gutterBottom>
        What do you enjoy?
      </Typography>
      <Grid container spacing={3}>
       
        <Grid item xs={12}>
          <TextField value={interest} autoComplete="off" onChange={(e)=>{changeInterest(e.target.value)}} variant="outlined" name="interests" label="Interests" fullWidth />
        </Grid>
        <Button type='submit'  onClick={()=>{props.setInterests([...props.interests, interest]); changeInterest("");}} variant="contained" color="primary"> 
            Add! 
        </Button>
       
        <Grid item xs={12}>
         {props.interests.map((interest, i)=>{
            return  <Chip key={i} style={{margin: '4px'}} label={interest} color="primary" 
                    variant="outlined" onDelete={()=>{console.log("delete me!")}}/>
            })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default InterestsForm;

