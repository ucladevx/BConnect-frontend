import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";

//IDEA FOR IMAGE
//https://www.npmjs.com/package/react-responsive-carousel
function Login(props){
    let history = useHistory();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    useEffect(()=>{
        if (props.authenticated){
            //props.cookies.set("token", props.token, { path: '/' })
            props.history.push("/connect")
        }
    })

    const classes = useStyles();

    let handleLogin = (e) => {
        e.preventDefault();
        props.login(username, password)
    }

    return (
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={5} md={8} className={classes.image} />
            <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <img style={{width: '70px', height: '80px', marginTop: '-10px'}} src='logo.png'/>
                <Typography component="h1" variant="h4"> Welcome, Bruin! </Typography>
                <form onSubmit={handleLogin} className={classes.form} noValidate>
                  <TextField autoComplete='false' onChange={(e)=>{setUsername(e.target.value)}} name="username" value={username} variant="outlined" 
                    margin="normal" required fullWidth id="email" label="Username" autoFocus
                  />
                  <TextField autoComplete='false' variant="outlined" margin="normal" required fullWidth onChange={(e)=>{setPassword(e.target.value)}}
                    name="password" label="Password" type="password" id="password" value={password}
                  />
                  {props.error ?  <Alert severity="error">{props.error}</Alert> : null}
                  <Button style={{backgroundColor: '#2d75b0'}} type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Login
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link style={{color: '#2d75b0'}} href="#" variant="body2"> Forgot password?</Link>
                    </Grid>
                    <Grid item>
                        <Link style={{color: '#2d75b0'}} onClick={()=>{history.push("/signup")}} variant="body2">{"Don't have an account? Sign Up"}</Link>
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

export default Login;


const useStyles = makeStyles(theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://stadiumjourney.com/wp-content/uploads/2016/02/Championship-banners-galore.jpg)',
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
      backgroundColor: '#2d75b0',
    },
    form: {
      width: '95%', // Fix IE 11 issue.
      marginTop: theme.spacing(2),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));