import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function OldHome(props){
    const classes = useStyles();

    return (
            <div class={classes.sizing}>
                <div class={classes.textBox}>
                    <Typography style={{fontWeight: '400', color: '#3e403e'}} variant="h1" component="h2" gutterbottom> Meet UCLA alumni near you</Typography>
                    <Typography variant="body1" gutterbottom style={{marginTop: '7px', marginBottom: '6px', color:'#3e403e'}}>
                        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
                        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
                        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                    </Typography>
                    <button onClick={props.redirect} class={classes.button} >Learn More!</button>
                </div>
                <div  style={{'width':'34%'}}>
                    <img class={classes.img} 
                        src={"https://lh3.googleusercontent.com/proxy/4t1OoNi_rRbCv5xRDWfIkR-WnV09dXEBLZ80Ahx7lx5gPU3L1dSziTsc2LDy3DlUwjyrwjFKIA5KEWDHeFwtraC2l9AC24-FV_L9NKOffvy1Jf1XCQ"} 
                    />
                </div>
            </div>
    );
}

export default OldHome;

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    sizing: {
      height: '83%',
      width: '80%',
      margin: 'auto',
      marginTop: '160px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%'
    },
    textBox: {
        width: '57%', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent:'space-between',
        alignItems: 'flex-start'
    },
    button: {
        border: '4px solid #3e403e',
        marginTop: '20px', 
        borderRadius: '30px',
        height: '60px',
        width: '240px',
        fontSize: '20px',
        fontWeight: '500',
        padding: '7px',
        outline: 'none',
        color: '#3e403e',
        "&:hover": {
            border: "4px solid gray"
          },
        "&:focus": {
        border: "4px solid black"
        },
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }));