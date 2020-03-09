import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import Alert from '@material-ui/lab/Alert';

function Signup(props){
    let history = useHistory();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [fName, setFN] = useState("");
    const [lName, setLN] = useState("");

    useEffect(()=>{
        if (props.authenticated && !props.needInfo) {
            history.push("/");  
        }
    })

    const classes = useStyles();

    let handleLogin = (e) => {
        e.preventDefault();
        props.register(username, password, fName, lName)
        
        if(props.authenticated){
          props.next();
        }
    }

    return (
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={5} md={8} className={classes.image} />
            <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}><GroupAddIcon /></Avatar>
                <Typography component="h1" variant="h4"> Sign Up </Typography>
                <form onSubmit={handleLogin} className={classes.form} noValidate>
                  <div >
                    <TextField style={{width: '49%', marginRight: '1%'}} variant="outlined" margin="normal" required  onChange={(e)=>{setFN(e.target.value)}}
                      name="fname" label="First Name" id="fname" value={fName} autoComplete="off"
                    />
                    <TextField style={{width: '49%', marginLeft: '1%'}} variant="outlined" margin="normal" required onChange={(e)=>{setLN(e.target.value)}}
                      name="password" label="Last Name"  id="lname" value={lName} autoComplete="off"
                    />
                  </div>
                  <TextField autoComplete="off" onChange={(e)=>{setUsername(e.target.value)}} name="username" value={username} variant="outlined" 
                    margin="normal" required fullWidth id="email" label="Username" autoFocus
                  />
                  <TextField variant="outlined" margin="normal" required fullWidth onChange={(e)=>{setPassword(e.target.value)}}
                    name="password" label="Password" type="password" id="password" value={password} autoComplete="off"
                  />
                  {props.error ?  <Alert severity="error">{props.error}</Alert> : null}
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Sign Up
                  </Button>
                  <Grid container>
                    <Grid item>
                      <Link onClick={()=>{history.push("/login")}} variant="body2">{"Already have an account? Login"}</Link>
                    </Grid>
                  </Grid>
                  <Box mt={5}>
                  </Box>
                </form>
              </div>
            </Grid>
          </Grid>
    );
}

export default Signup;


const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://a.scpr.org/i/7d9bd45f92843d2662606be0fcae096a/77475-full.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'left',
    },
    paper: {
      margin: theme.spacing(8, 4),
      marginTop: theme.spacing(17),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '95%', // Fix IE 11 issue.
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));