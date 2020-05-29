import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { ThemeProvider } from '@material-ui/core/styles';

function InfoForm(props) {
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: '#F9D149',
      }
    },
  });

  /*<input style={{width: '362px'}} type="text" value={props.age} onChange={(e)=>{props.setAge(e.target.value)}} 
  name="age" placeholder="  Age*" className={classes.input} />*/

  return (
    <div className={classes.inputBox}>
      <Typography className={classes.mainText}  component="h1" variant="h4" gutterBottom>
        Let's start with the <span style={{color: '#f9d149'}}>basics</span>.
      </Typography>
      <ThemeProvider theme={theme}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl required variant='outlined' className={classes.formControl}>
              <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="age">Age</InputLabel>
              <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }}
                label = "Age*" style={{width: '362px'}}
                onChange={(e)=>{props.setAge(e.target.value)}} name="age" value={props.age}  
                className={classes.input} type="text" id="age" autoComplete="off"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required variant='outlined' className={classes.formControl}>
              <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="gender">Gender</InputLabel>
              <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }}
                label = "Gender*" style={{width: '362px'}}
                onChange={(e)=>{props.setGender(e.target.value)}} name="gender" value={props.gender}  
                className={classes.input} type="text" id="gender" autoComplete="off"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required variant='outlined' className={classes.formControl}>
              <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="year">Graduation Year</InputLabel>
              <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }}
                label = "Graduation Year*" style={{width: '362px'}}
                onChange={(e)=>{props.setYear(e.target.value)}} name="year" value={props.year}  
                className={classes.input} type="text" id="year" autoComplete="off"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl required variant='outlined' className={classes.formControl}>
              <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="degree">Major/Minor</InputLabel>
              <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }}
                label = "Major/Minor*" style={{width: '362px'}}
                onChange={(e)=>{props.setDegree(e.target.value)}} name="degree" value={props.degree}  
                className={classes.input} type="text" id="degree" autoComplete="off"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl required variant='outlined' className={classes.formControl}>
              <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="job">Job</InputLabel>
              <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }} label = "Job*"
                onChange={(e)=>{props.setCurJob(e.target.value)}} name="job" value={props.currentjob}  
                className={classes.input} type="text" id="job" autoComplete="off"
              />
            </FormControl>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
mainText: {
  fontFamily: 'Avenir',
  color: 'white',
  marginTop: '10px',
  marginBottom: '20px',
  fontWeight: '700',
  fontSize: '40px',
  lineHeight: '40px',
  marginLeft: '12.5px'
},
formControl: {
  fontFamily: 'Avenir',
  margin: '12px',
  marginTop: '24px'
},
input: {
  width: '774px',
  height: '60px',
  //margin: '12px',
  //border: '1px solid white',
  //background: 'rgba(255,255,255,.2)',
  //outline: 'none',
  alignSelf: 'center',
  //fontSize: '20px',
  color: 'white',
  //paddingLeft: '10px',
  //paddingRight: '-10px',
  //'&::placeholder': {
  //  color: '#f9d149',
  //  fontSize: '14px',
  //  paddingLeft: '0px'
  //},
},
notchedOutline: {
  borderColor: 'white',
},
inputBox: {
  margin: 'auto',
  width: '800px'
}

  
}));

export default InfoForm;