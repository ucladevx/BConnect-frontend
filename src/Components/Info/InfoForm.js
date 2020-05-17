import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function InfoForm(props) {
  const classes = useStyles();

  return (
    <div className={classes.inputBox}>
      <Typography className={classes.mainText}  component="h1" variant="h4" gutterBottom>
        Let's start with the <span style={{color: '#f9d149'}}>basics</span>.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <input style={{width: '362px'}} type="text" value={props.degree} onChange={(e)=>{props.setDegree(e.target.value)}} 
            name="degree" placeholder="Age *" className={classes.input} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input style={{width: '362px'}} type="text" value={props.year} onChange={(e)=>{props.setYear(e.target.value)}} 
            name="year" placeholder="Gender *" className={classes.input} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input style={{width: '362px'}} type="text" value={props.clubs} onChange={(e)=>{props.setClubs(e.target.value)}} 
             name="clubs" placeholder="Graduation Year *" className={classes.input}  />
        </Grid>
        <Grid item xs={12} sm={6}>
          <input style={{width: '362px'}} type="text" value={props.bio} onChange={(e)=>{props.setBio(e.target.value)}}  
            name="bio" multiline rowsMax="5" placeholder="Major/Minor *" className={classes.input}  />
        </Grid>
        <Grid item xs={12}>
          <input type="text" className={classes.input} name="job" placeholder="Current Job *"  />
        </Grid>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
mainText: {
  color: 'white',
  marginTop: '10px',
  marginBottom: '20px',
  fontWeight: '700',
  fontSize: '40px',
  lineHeight: '40px',
},
input: {
  width: '767px',
  height: '60px',
  margin: '12px',
  border: '1px solid white',
  background: 'rgba(255,255,255,.2)',
  outline: 'none',
  alignSelf: 'center',
  fontSize: '19px',
  color: 'white',
  '&::placeholder': {
    color: '#f9d149',
    fontSize: '12px',
    paddingLeft: '0px'
  },
},
inputBox: {
  margin: 'auto',
  width: '800px'
}

  
}));

export default InfoForm;