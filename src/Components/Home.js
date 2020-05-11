import React, {useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Home(props){
    const [email, changeEmail] = useState("")
    const [submitted, changeSubmitStatus] = useState(false)
    const classes = useStyles();

    const submit = (e) => {
        e.preventDefault()
        if(submitted === false){
            // call some function from props that is from reducer, calls axios
            // axios.post("https://protected-refuge-33249.herokuapp.com/CHANGE-THIS", {email})
            changeEmail("Thank you! We will notify you when BConnect launches!")
            changeSubmitStatus(true)
        }
    }

    return (
        <div class={classes.background}>
            <div class={classes.top}>
                <Typography class={classes.bconnect}> <span style={{color: '#9fc9eb'}}>B</span>
                    <span style={{color: '#f9d149'}}>C <LocationOnIcon style={{color: '#9fc9eb', fontSize: '32px',margin: '-18px', marginBottom:'-10px'}} /> nnect</span></Typography>
            </div>
            <img class={classes.img} src={"/landing_graphic.png"} />
            <div class={classes.main}>
                <div style={{alignSelf: 'flex-start', zIndex: '1'}}>
                    <Typography class={classes.text1}> Meet <span style={{color: '#f9d149'}}>UCLA</span> </Typography>
                    <Typography class={classes.text1}>alumni near</Typography>
                    <Typography class={classes.text1}><span style={{color:'#9fc9eb'}}>you</span>.</Typography>
                </div>
                <div name="just filling space" style={{height: '300px'}}></div>
                <div class={classes.bottom} >
                        <Typography class={classes.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna.
                        </Typography>
                        <form onSubmit={submit} >
                            {submitted===false ? <input value={email} onChange={(e)=>{changeEmail(e.target.value)}} placeholder="Enter your email address" 
                                type='text' class={classes.input}/> :
                                <input value={email} placeholder="Enter your email address" 
                                type='text' disabled class={classes.input}/>  
                            }
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Home;

//<Typography class={classes.text2} style={{flexItem: 'flex-end'}}> Sign up <span onClick={props.redirect} class={classes.fancy} >now</span>.</Typography>

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
    bottom: {
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-end', 
        zIndex: '1',
        marginRight: '-20px'
    },
    img: {
        top: '50%',
        left: '50%',
        marginTop: '-230px',
        marginLeft: '-255px',
        width: '550px',
        margin: '-20px',
        marginBottom: '0px',
        position: 'absolute',
        alignSelf: 'center',
        zIndex: '0'
    },
    background: {
        backgroundColor: '#2d75b0',
        color: 'white',
        zIndex: '-1',
        left: 0,
        height: '100%',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
    },
    main: {
        width: '60%',
        height: '70%',
        minHeight: '800px',
        minWidth: '700px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '2'
    },
    text1: {
        fontWeight: '800',
        fontSize: '50px',
        lineHeight: '60px',
        margin: '0',
        alignSelf: 'flex-start',
        marginTop: '0'
    },
    text2: {
        fontWeight: '500',
        fontSize: '27px',
        lineHeight: '40px',
        alignSelf: 'flex-end',
        width: '40%',
        "&:focus-within": {
            color: '#f9d149',
            textShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)',
        },
        marginRight: '-60px',
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