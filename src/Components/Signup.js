import React, {useState, useEffect} from 'react'
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Signup(props){
    let history = useHistory();
    const [password, setPassword] = useState("");
    const [mpassword, setMPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fName, setFN] = useState("");
    const [lName, setLN] = useState("");
    const [passwordError, changePError] = useState(false)

    useEffect(()=>{
        if (props.authenticated && !props.needInfo) {
            history.push("/connect");  
        }
    })

    const classes = useStyles();

    let handleLogin = (e) => {
        e.preventDefault();
        if(password === mpassword){
          changePError(false)
          props.register(username, password, fName, lName)
        } else {
          changePError(true)
        }
        
        //not sure if this is doing anything
        if(props.authenticated){
          props.next();
        }
    }

    return (
      <div className={classes.main}>
            <img className={classes.powell} src='powell.png'/>
            <img className={classes.logoPic} src='logo.png'/>
            <div className={classes.formBox}>
              <Typography class={classes.bconnect}> <span style={{color: '#9fc9eb'}}>B</span>
                      <span style={{color: '#f9d149'}}>C <LocationOnIcon className={classes.locIcon} /> nnect</span></Typography>
              <Typography className={classes.bigtext} component="h1" variant="h4"> Sign <span className={classes.up}>Up</span> </Typography>
              <form onSubmit={handleLogin} className={classes.inputs} autocomplete="off">
                <div className={classes.names}>
                  <input style={{width: '186px'}} className={classes.input} type="text" onChange={(e)=>{setFN(e.target.value)}}
                    name="fname" id="fname" placeholder="First Name *" value={fName}   autocomplete="off"
                    />
                  <input style={{width: '186px'}} className={classes.input} onChange={(e)=>{setLN(e.target.value)}}
                    name="password" type="text" placeholder="Last Name *"  id="lname" value={lName} autocomplete="off"
                    />
                </div>
                <input  onChange={(e)=>{setUsername(e.target.value)}} name="username" value={username}  
                  placeholder="Email *" className={classes.input} id="text" autocomplete="off"
                  />
                <input className={classes.input} onChange={(e)=>{setPassword(e.target.value)}} autocomplete="off"
                  name="password" type="password" placeholder="Password *" id="password" value={password}
                  />
                {passwordError === true ?  <Alert severity="error">Your passwords must match!</Alert> : null}
                {props.error ?  <span style={{color: 'white'}}>{props.error}</span> : null}
                <div style={{display: 'flex', justifyContent: 'center'}}><button type="submit" className={classes.submit}> Sign Up </button></div>

                <Link className={classes.link}
                     onClick={()=>{history.push("/login")}}>Already have an account? Sign in.</Link>
                </form>
              </div>
        </div>
    );
}

export default Signup;


const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    logoPic: {
      width: '88px',
      height: '123px',
      left: '30px',
      top: '25px',
    }, 
    powell: {
      zIndex: '0',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      position: 'absolute',
      minWidth: '1000px'
    }, 
    bconnect: {
      fontSize: '20px',
      marginTop: '100px',
      fontWeight: '600',
    },
    locIcon: {
      height: '20px',
      width: '20px',
      margin: '-8px',
      color: '#9fc9eb'
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
    main: {
      backgroundColor: '#9fc9eb',
      height: '100%',
      width: '100%',
      zIndez: '-1',
      position: 'absolute',
      fontFamily: 'Avenir',
      fontStyle: 'normal',
    },
    bigtext: {
      fontWeight: '800',
      fontSize: '90px',
      lineHeight: '40px',
      color: 'white',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      marginBottom: '65px',
      marginTop: '25px',
    },
    up: {
      color: '#f9d149',
      textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    formBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      zIndex: '1',
      position: 'absolute',
      backgroundColor: 'rgba(45, 117, 176, .95)',
      width: '506px',   
      height: '728px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
      right: '100px',
    },
    input: {
      width: '400px',
      height: '60px',
      margin: '12px',
      border: '1px solid white',
      background: 'none',
      outline: 'none',
      alignSelf: 'center',
      paddingTop: '0',
      color: 'white',
      '&::placeholder': {
        color: '#f9d149'
    },
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