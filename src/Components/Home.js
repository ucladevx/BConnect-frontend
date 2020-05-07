import React, {useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function OldHome(props){
    const [email, changeEmail] = useState("")
    const [submitted, changeSubmitStatus] = useState(false)
    const classes = useStyles();

    const submit = (e) => {
        e.preventDefault()
        if(submitted === false){
            // call some function from props that is from reducer, calls axios
            // axios.post("https://protected-refuge-33249.herokuapp.com/CHANGE-THIS", {email})
            changeEmail("Thank you! We can't wait to see you again soon!")
            changeSubmitStatus(true)
        }
    }

    return (
        <div class={classes.background}>
            <div class={classes.top}>
                <Typography class={classes.bconnect}> <span style={{color: '#9fc9eb'}}>B</span>
                    <span style={{color: '#f9d149'}}>C <LocationOnIcon style={{color: '#9fc9eb', fontSize: '32px',margin: '-18px', marginBottom:'-10px'}} /> nnect</span></Typography>
                <Typography class={classes.about}> About </Typography>
            </div>
            <div class={classes.main}>
                <Typography class={classes.text1}> Meet <span style={{color: '#f9d149'}}>UCLA</span> </Typography>
                <Typography class={classes.text1}>alumni near</Typography>
                <Typography class={classes.text1}><span style={{color:'#9fc9eb'}}>you</span>.</Typography>
                <img class={classes.img} src={"/landing_graphic.png"} />
                <Typography class={classes.text2} style={{flexItem: 'flex-end'}}> Sign up <span onClick={props.redirect} class={classes.fancy} >now</span>.</Typography>
                <form onSubmit={submit} style={{'alignSelf':'flex-end'}}>
                    <input value={email} onChange={(e)=>{changeEmail(e.target.value)}} placeholder="Enter your email address" 
                        type='text' class={classes.input}/>
                </form>
            </div>
        </div>
    );
}

export default OldHome;

const useStyles = makeStyles((theme) => ({
    input: {
        width: '520px',
        height: '40px',
        border: 'none',
        borderRadius: '32px',
        backgroundColor: '#569ad1',
        padding: '8px',
        paddingLeft: '33px',
        color: 'white',
        fontSize: '18px',
        fontWeight: '200',
        marginTop: '-10px',
        outline: 'none',
        '&::placeholder': {
            color: 'white'
        },
    },
    img: {
        width: '550px',
        height: '470px',
        margin: '-70px',
        marginBottom: '-30px'
    },
    background: {
        backgroundColor: '#2d75b0',
        color: 'white',
        zIndex: -1,
        left: 0,
        width: '100vw',
        height: '100vh',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
    },
    main: {
        width: '50%',
        height: '80%',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text1: {
        fontWeight: '800',
        fontSize: '50px',
        lineHeight: '60px',
        margin: '0',
        alignSelf: 'flex-start'
    },
    text2: {
        fontWeight: '500',
        fontSize: '34px',
        lineHeight: '40px',
        alignSelf: 'flex-end',
        "&:focus-within": {
            color: '#f9d149',
            textShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)',
        },
    },
    fancy: {
        color: '#f9d149',
        "&:hover": {
            color: 'white'
        },
        "&:focus": {
            color: '#f9d149',
            textShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)',
        },
    },
    bconnect: {
        textShadow: '3px 3px 3px rgba(0, 0, 0, 0.25)',
        marginLeft: '55px',
        fontSize: '40px',
        fontWeight: '600'
    },
    about: {
        marginRight:'150px', 
        fontSize: '18px'
    }
}));