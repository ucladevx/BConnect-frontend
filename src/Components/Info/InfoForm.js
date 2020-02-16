import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import React from 'react';

function InfoForm(props) {
  return (
    <React.Fragment>
      <Typography style={{marginTop: '10px', marginBottom: '20px'}} variant="h6" gutterBottom>
        We just need a little information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField value={props.degree} onChange={(e)=>{props.setDegree(e.target.value)}} variant="outlined" required name="degree" label="Major" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField value={props.year} onChange={(e)=>{props.setYear(e.target.value)}} variant="outlined" required name="year" label="Graduation Year" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField value={props.interests} onChange={(e)=>{props.setInterests(e.target.value)}} variant="outlined" required name="interests" label="Interests" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField value={props.clubs} onChange={(e)=>{props.setClubs(e.target.value)}} variant="outlined" name="clubs" label="Clubs/Fraternities/Sororities" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField value={props.bio} onChange={(e)=>{props.setBio(e.target.value)}} variant="outlined" name="bio" multiline rowsMax="5" label="Bio" fullWidth />
        </Grid>
      </Grid>
      <Grid style={{marginTop: '15px'}}>
        <Typography >
        Use your current location
            <Switch checked={props.useCurLoc} onChange={()=>{props.set(!props.useCurLoc) }} color="primary" />
        </Typography>
     </Grid>
    </React.Fragment>
  );
}

export default InfoForm;