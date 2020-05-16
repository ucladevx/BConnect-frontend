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
              <form onSubmit={handleLogin} noValidate>
                <div>
                  <input className={classes.input} type="text" onChange={(e)=>{setFN(e.target.value)}}
                    name="fname" id="fname" value={fName} autoComplete="off" 
                    />
                  <input className={classes.input} onChange={(e)=>{setLN(e.target.value)}}
                    name="password" type="text" label="Last Name"  id="lname" value={lName} autoComplete="off"
                    />
                </div>
                <input autoComplete="off" onChange={(e)=>{setUsername(e.target.value)}} name="username" value={username} variant="outlined" 
                  margin="normal" className={classes.input} id="text" autoFocus
                  />
                <input className={classes.input} onChange={(e)=>{setPassword(e.target.value)}}
                  name="password" type="password" id="password" value={password} autoComplete="off"
                  />
                {passwordError === true ?  <Alert severity="error">Your passwords must match!</Alert> : null}
                {props.error ?  <Alert severity="error">{props.error}</Alert> : null}
                <div style={{display: 'flex', justifyContent: 'center'}}><button type="submit" className={classes.submit}> Sign Up </button></div>
                <Link className={classes.link}
                     onClick={()=>{history.push("/login")}} variant="body2">Already have an account? Signin.</Link>
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
      opacity: '1'
    },
    locIcon: {
      height: '20px',
      width: '20px',
      margin: '-9px',
      color: '#9fc9eb'
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
      marginBottom: '50px',
      marginTop: '10px',
      opacity: '1'
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
      backgroundColor: '#2d75b0',
      width: '506px',   
      height: '728px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '20px',
      right: '100px',
      opacity: '.95'
    },
    input: {
      width: '430px',
      height: '60px',
      margin: '12px',
      border: '1px solid white',
      background: 'none',
      outline: 'none',
      opacity: '1'
    },
    link: {
      color: '#F9D149',
      fontSize: '12px',
      fontWeight: '300',
      margin: 'auto',
      opacity: '1'
    },
    submit: {
      opacity: '1',
      
    }

    
  }));