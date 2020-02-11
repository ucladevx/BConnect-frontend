import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//IDEA FOR IMAGE
//https://www.npmjs.com/package/react-responsive-carousel
function Login(props){
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const classes = useStyles();

    let handleLogin = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    }

    return (
            <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <div className={classes.paper}>
                <Avatar className={classes.avatar}><EmojiEventsIcon /></Avatar>
                <Typography component="h1" variant="h3"> Sign in </Typography>
                <form className={classes.form} noValidate>
                  <TextField onChange={(e)=>{setUsername(e.target.value)}} name="username" value={username} variant="outlined" 
                    margin="normal" required fullWidth id="email" label="Username" autoFocus
                  />
                  <TextField variant="outlined" margin="normal" required fullWidth onChange={(e)=>{setPassword(e.target.value)}}
                    name="password" label="Password" type="password" id="password" value={password}
                  />
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2"> Forgot password?</Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">{"Don't have an account? Sign Up"}</Link>
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
      backgroundImage: 'url(https://a.scpr.org/i/7d9bd45f92843d2662606be0fcae096a/77475-full.jpg)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'left',
    },
    paper: {
      margin: theme.spacing(8, 4),
      marginTop: theme.spacing(14),
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