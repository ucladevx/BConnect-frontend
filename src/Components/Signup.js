import React, {useState, useEffect} from 'react'
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { ThemeProvider } from '@material-ui/core/styles';

function Signup(props){
    let history = useHistory();
    const [password, setPassword] = useState("");
    const [mpassword, setMPassword] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFN] = useState("");
    const [lastname, setLN] = useState("");
    const [passwordError, changePError] = useState(false)

    useEffect(()=>{
        if (props.authenticated && !props.needInfo) {
            history.push("/connect");  
        }
    })

    const cssProps = {breakpoint: 1000}
    const classes = useStyles(cssProps);

    let handleLogin = (e) => {
        e.preventDefault();
        if(mpassword === password){
          changePError(false)
          props.register(username, password, firstname, lastname)
        } else {
          changePError(true)
        }
        
      
        //not sure if this is doing anything
        if(props.authenticated){
          props.next();
        }
    }

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
    
    return (
      <div className={classes.main}>
            <img className={classes.powell} src='powell.png'/>
            <img className={classes.cropped_powell} src='powell_cropped_center.png'/>
            <img className={classes.logoPic} src='logo.png'/>
            <div className={classes.formBox}>
              <Typography class={classes.bconnect}> <span style={{color: '#9fc9eb'}}>B</span>
                      <span style={{color: '#f9d149'}}>C <LocationOnIcon className={classes.locIcon} /> nnect</span></Typography>
              <Typography className={classes.bigtext} component="h1" variant="h4"> Sign <span className={classes.up}>Up</span> </Typography>
              <form onSubmit={handleLogin} className={classes.inputs} autoComplete="off">
              <ThemeProvider theme={theme}>
                <div className={classes.names}>
                <FormControl required variant='outlined' className={classes.formControl} style={{marginRight: '2px'}}>
                  <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="fname">First Name</InputLabel>
                  <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }}
                    label = 'First Name*' style={{width: '193px'}}
                    onChange={(e)=>{setFN(e.target.value)}} name="fname" value={firstname}  
                    className={classes.input} type="text" id="fname" autoComplete="off"
                  />
                </FormControl>
                <FormControl required variant='outlined' className={classes.formControl}>
                  <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="lname">Last Name</InputLabel>
                  <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }}
                    label = 'Last Name*' style={{width: '193px'}}
                    onChange={(e)=>{setLN(e.target.value)}} name="lname" value={lastname}  
                    className={classes.input} type="text" id="lname" autoComplete="off"
                  />
                </FormControl>     
                </div>
                <FormControl required variant='outlined' className={classes.formControl}>
                  <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="username">Email</InputLabel>
                  <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }} 
                    label = 'Email*' onChange={(e)=>{setUsername(e.target.value)}} name="username" value={username}  
                    className={classes.input} type="text" id="username" autoComplete="off"
                  />
                </FormControl>
                <FormControl required variant='outlined' className={classes.formControl}>            
                  <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="password">Password</InputLabel>      
                  <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }}
                    label="Password*" className={classes.input} onChange={(e)=>{setPassword(e.target.value)}} autoComplete="off"
                    name="password" type="text" id="password" value={password}
                  />
                </FormControl>
                <FormControl required variant='outlined' className={classes.formControl}>
                  <InputLabel shrink style={{color : theme.palette.secondary.main}} htmlFor="mpassword">Confirm Password</InputLabel>
                  <OutlinedInput notched classes={{ notchedOutline: classes.notchedOutline }}
                    label="Confirm Password*" className={classes.input} onChange={(e)=>{setMPassword(e.target.value)}} autoComplete="off"
                    name="mpassword" type="text" id="mpassword" value={mpassword}
                  />
                </FormControl>
                {props.error ?  <span style={{color: 'white'}}>{props.error}</span> : 
                  (passwordError===true ?  <span style={{color: 'white'}}>Your passwords must match</span> : null)}
                <div style={{display: 'flex', justifyContent: 'center'}}><button type="submit" className={classes.submit}> Sign Up </button></div>
                <Link className={classes.link}
                     onClick={()=>{history.push("/login")}}>Already have an account? Sign in.</Link>
                </ThemeProvider>
                </form>
              </div>
        </div>
    );
}

export default Signup;
// {passwordError === true ?  <Alert severity="error">Your passwords must match!</Alert> : null}

const useStyles = makeStyles(theme => ({ 
    main: {
      backgroundColor: '#9fc9eb',
      height: '100vh',
      width: '100vw',

      zIndez: '-1',
      position: 'absolute',
      fontFamily: 'Avenir',
      fontStyle: 'normal',
    },
    powell: props => ({
      zIndex: '0',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      position: 'absolute',
      [theme.breakpoints.down(props.breakpoint)]: {
        display: 'none',
      },
    }),
    cropped_powell: props => ({
      zIndex: '0',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      position: 'absolute',
      [theme.breakpoints.up(props.breakpoint)]: {
        display: 'none',
      },
    }), 
    logoPic: {
      width: '88px',
      height: '123px',
      left: '25px',
      top: '25px',
      position: 'absolute'
    },
    formBox: {
      fontFamily: 'Avenir',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      zIndex: '1',
      position: 'absolute',
      right: '100px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(45, 117, 176, .95)',
      width: '506px',   
      height: '728px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
    },
    bconnect: {
      fontSize: '20px',
      marginTop: '70px',
      fontWeight: '600',
    },
    locIcon: {
      height: '20px',
      width: '20px',
      margin: '-8px',
      color: '#9fc9eb'
    },
    notchedOutline: {
      borderColor: 'white',
    },
    root: {
      height: '100vh',
    },
    inputs: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    names: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    bigtext: {
      fontFamily: 'Avenir',
      fontWeight: '800',
      fontSize: '90px',
      lineHeight: '40px',
      color: 'white',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      marginBottom: '50px',
      marginTop: '20px',
    },
    up: {
      color: '#f9d149',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    formControl: {
      margin: '12px'
    },
    input: {
      fontFamily: 'Avenir',
      width: '400px',
      height: '60px',
      color: 'white',

      alignSelf: 'center',
      //fontSize: '19px',
      //paddingLeft: '10px',
      //paddingRight: '-10px',
      //'&::placeholder': {
      //  color: '#f9d149',
      //  fontSize: '12px',
      //  marginLeft: '-10px',
      //  marginTop: '-10px'
      //},
    },
    link: {
      color: '#F9D149',
      fontSize: '12px',
      fontWeight: '300',
      margin: 'auto',
    },
    submit: {
      width: '164px',
      height: '50px',
      color: 'white',
      backgroundColor: '#9fc9eb',
      borderRadius: '20px',
      fontSize: '15px',
      fontWeight: '400',
      letterSpacing: '2px',
      outline: 'none',
      border: 'none',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      margin: '20px',
      "&:hover": {
        boxShadow: '2px 6px 6px rgba(0, 0, 0, 0.3)'
      },
      "&:focus": {
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.25)'
      },

    }

    
  }));