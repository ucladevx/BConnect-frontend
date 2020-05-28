import React, {useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import Alert from '@material-ui/lab/Alert';

function Home(props){
    const [email, changeEmail] = useState("")
    const [submitted, changeSubmitStatus] = useState(false)
    const [arrowDisplay, changeArrowDisplay] = useState("")
    const cssProps = {breakpoint: 1170}

    const classes = useStyles(cssProps);

    //if(email.match(/.*@ucla.edu/g) != null){ SHOULD BE FOR SIGNUP
    const submit = (e) => {
        e.preventDefault()
        if(submitted === false){
                axios.post("https://protected-refuge-33249.herokuapp.com/email", {email}).then((resp)=>{
                    //console.log(resp)
                }).catch((err)=>{
                    //console.log(err)
                })
                changeEmail("Thanks! We'll let you know when we launch!")
                changeSubmitStatus(true)
                changeArrowDisplay("none")
        }
    }


    return (
        <div class={classes.background}>
            <div class={classes.top}>
                <Typography class={classes.bconnect}> <span style={{color: '#9fc9eb'}}>B</span>
                    <span style={{color: '#f9d149'}}>C <LocationOnIcon className={classes.locIcon} /> nnect</span></Typography>
            </div>
            <div class={classes.main}>
                <div class={classes.left} >
                    <div>
                        <Typography class={classes.text1}> Meet <span style={{color: '#f9d149'}}>UCLA</span> </Typography>
                        <Typography class={classes.text1}>alumni near</Typography>
                        <Typography class={classes.text1}><span style={{color:'#9fc9eb'}}>you</span>.</Typography>
                    </div>
                    <Typography class={classes.text2}>BConnect is a social platform that connects UCLA alumni after graduation, where you’ll be able to drop a pin on a map
                        and find Bruins close to you! You’ll be able to build connections based on shared passions with our filter-by-interest system. 
                        We hope to release the initial product by the end of 2020 - sign up <b>now</b> to be notified when we launch!
                    </Typography>
                    <form onSubmit={submit} class={classes.form}>
                        {submitted===false ? <input value={email} onChange={(e)=>{changeEmail(e.target.value)}} placeholder="Enter your email" 
                            type='text' class={classes.input}/> :
                            <input value={email} placeholder="Enter your email" 
                            type='text' disabled class={classes.input}/>
                        }
                        <ArrowForwardRoundedIcon style={{display: arrowDisplay}} onClick={submit} className={classes.arrowIcon}/>
                    </form>
                </div>
                <img class={classes.img} src={"/landing_graphic.png"} />
            </div>
        </div>
    );
}

export default Home;

//<Typography class={classes.text2} style={{flexItem: 'flex-end'}}> Sign up <span onClick={props.redirect} class={classes.fancy} >now</span>.</Typography>

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#2d75b0',
        color: 'white',
        zIndex: '-1',
        left: 0,
        width: '100vw',
        height: '100vh',
        fontFamily: 'Avenir',
        fontStyle: 'normal'
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '2'
    },
    bconnect: props => ({
        textShadow: '3px 3px 3px rgba(0, 0, 0, 0.25)',
        marginLeft: '55px',
        fontSize: '6.0vh',
        [theme.breakpoints.down(props.breakpoint)]: {
            marginLeft: '3vh',
            fontSize: '3vh'
        },
        fontWeight: '600'
    }),
    locIcon: props => ({
        textShadow: '3px 3px 3px rgba(0, 0, 0, 0.25)',
        color: '#9fc9eb', 
        fontSize: '4.8vh',
        margin: '-2.7vh', 
        marginBottom: '-1.5vh',
        [theme.breakpoints.down(props.breakpoint)]: {
            fontSize: '2.4vh',
            margin: '-1.35vh', 
            marginBottom: '-0.75vh'
        }
    }),
    main: props => ({
        margin: 'auto',
        display: 'flex',
        width: '85vw',
        height: '70vh',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        [theme.breakpoints.down(props.breakpoint)]: {
            width: '90vw',
            height: '90vh',
            flexDirection: 'column-reverse',
            alignItems: 'center',
            maxWidth: '780px'
        }
    }),
    text1: props => ({
        fontWeight: '800',
        fontSize: '8.0vh',
        lineHeight: '8.0vh',
        margin: '0',
        alignSelf: 'flex-start',
        marginTop: '0',
        [theme.breakpoints.down(props.breakpoint)]: {
            fontSize: '3vh',
            lineHeight: '3.6vh'
        }
    }),
    img: props => ({
        zIndex: '0',
        [theme.breakpoints.up(props.breakpoint)]: {
            marginLeft: '-6.5%',
            height: '100%',
        },
        [theme.breakpoints.down(props.breakpoint)]: {
            width: '80%',
            maxHeight: '50vh',
            maxWidth: '60vh'
        }
    }),
    left: props => ({
        display:'flex',
        height: '100%',
        flexDirection:'column',
        justifyContent: 'center',
        minWidth: '460px',
        alignItems: 'flex-start', 
        zIndex: '1',
        width: '30%',
        alignSelf: 'flex-start',
        [theme.breakpoints.down(props.breakpoint)]: {
            justifyContent: 'flex-start',
            minWidth: '0px',
            width: '60%',
            alignSelf: 'center'
        }
    }),
    text2: props => ({
        fontWeight: 'normal',
        fontSize: '2.0vh',
        lineHeight: '2.4vh',
        alignSelf: 'flex-start',
        width: '85%',
        "&:focus-within": {
            color: '#f9d149',
            textShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)',
        },
        [theme.breakpoints.down(props.breakpoint)]: {
            fontSize: '2vh',
            lineHeight: '2.4vh',
            alignSelf: 'center',
            width: '100%'
        }
    }),
    form: props => ({
        width: '305px',
        height: '35px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        [theme.breakpoints.down(props.breakpoint)]: {
            width: '100%',
            height: '30px',
        }
    }),
    input: props => ({
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: 'rgba(159, 201, 235, 0.37)',
        paddingLeft: '10px',
        color: 'white',
        fontSize: '14px',
        fontWeight: '200',
        marginTop: '-10px',
        outline: 'none',
        marginRight: '-10%',
        '&::placeholder': {
            color: '#bfccd9'
        },
        [theme.breakpoints.down(props.breakpoint)]: {
            fontSize: '10px'
        }
    }),
    arrowIcon: {
        color: '#F9D149',
        borderRadius: '2px',
        border: '3px',
        height: '100%'
        },
    fancy: {
        color: '#f9d149',
        "&:hover": {
            color: 'white'
        },
        "&:focus": {
            color: '#f9d149',
            textShadow: '.3vh .3vh .3vh rgba(0, 0, 0, 0.5)',
        },
    },
    about: {
        marginRight:'150px', 
        fontSize: '18px'
    },
}));
