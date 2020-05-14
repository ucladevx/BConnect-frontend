import React, {useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Home(props){
    const [email, changeEmail] = useState("")
    const [submitted, changeSubmitStatus] = useState(false)
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let cssProps;

    if(vw > 0 && vw < 450 && vh > 0 && vh < 850){
        cssProps = {bconnectMarginLeft: '3vh', bconnectSize: '3vh',
                locIconSize: '2.4vh', locIconMargin: '-1.35vh', locIconMarginBottom: '-0.75vh',
                imgWidth: '80%', imgMarginTop: '0%',
                mainWidth: '90vw', mainHeight: '90vh', mainMinHeight: '0px', mainMinWidth: '0px', mainJustify: 'center', mainAlign: 'center',
                text1Size: '4vh', text1LineHeight: '4.8vh',
                text2Size: '3.8vh', text2LineHeight: '4.6vh', text2Width: '80%', text2Align: 'center',
                formWidth: '70%', formAlignSelf: 'center',
                inputTextSize: '13.5px', inputHeight: '30px', inputPaddingLeft: '15px'}
    } else {
        cssProps = {bconnectMarginLeft: '55px', bconnectSize: '40px',
                locIconSize: '32px', locIconMargin: '-18px', locIconMarginBottom: '-10px',
                imgWidth: '50%', imgMarginTop: '-10%',
                mainWidth: '60vw', mainHeight: '80vh', mainMinHeight: '800px', mainMinWidth: '600ox', mainJustify: 'flex-start', mainAlign: 'flex-start',
                text1Size: '50px', text1LineHeight: '60px',
                text2Size: '27px', text2LineHeight: '40px', text2Width: '40%', text2Align: 'flex-end',
                formWidth: '40%', formAlignSelf: 'flex-end',
                inputTextSize: '18px', inputHeight: '40px', inputPaddingLeft: '33px'}
    }

    const classes = useStyles(cssProps);

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
                    <span style={{color: '#f9d149'}}>C <LocationOnIcon className={classes.locIcon} /> nnect</span></Typography>
            </div>
            <div class={classes.main}>
                <div>
                    <Typography class={classes.text1}> Meet <span style={{color: '#f9d149'}}>UCLA</span> </Typography>
                    <Typography class={classes.text1}>alumni near</Typography>
                    <Typography class={classes.text1}><span style={{color:'#9fc9eb'}}>you</span>.</Typography>
                </div>
                <img class={classes.img} src={"/landing_graphic.png"} />
                <div class={classes.bottom} >
                        <Typography class={classes.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna.
                        </Typography>
                        <form onSubmit={submit} class={classes.form}>
                            {submitted===false ? <input value={email} onChange={(e)=>{changeEmail(e.target.value)}} placeholder="Enter your UCLA email address" 
                                type='text' class={classes.input}/> :
                                <input value={email} placeholder="Enter your UCLA email address" 
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
    background: {
        backgroundColor: '#2d75b0',
        color: 'white',
        zIndex: '-1',
        left: 0,
        width: '100vw',
        height: '100vh',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
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
        marginLeft: props.bconnectMarginLeft,
        fontSize: props.bconnectSize,
        fontWeight: '600'
    }),
    locIcon: props => ({
        color: '#9fc9eb', 
        fontSize: props.locIconSize,
        margin: props.locIconMargin, 
        marginBottom: props.locIconMarginBottom
    }),
    main: props => ({
        width: props.mainWidth,
        height: props.mainHeight,
        minHeight: props.mainMinHeight,
        minWidth: props.mainMinWidth,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: props.mainJustify,
        alignItems: props.mainAlign,
    }),
    text1: props => ({
        fontWeight: '800',
        fontSize: props.text1Size,
        lineHeight: props.text1LineHeight,
        margin: '0',
        alignSelf: 'flex-start',
        marginTop: '0'
    }),
    img: props => ({
        marginTop: props.imgMarginTop,
        marginLeft: '-10%',
        marginBottom: '0%',
        width: props.imgWidth,
        alignSelf: 'center',
        zIndex: '0'
    }),
    bottom: {
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-end', 
        zIndex: '1',
        //marginRight: '-20px',
    },
    text2: props => ({
        fontWeight: '500',
        fontSize: props.text2Size,
        lineHeight: props.text2LineHeight,
        alignSelf: props.text2Align,
        width: props.text2Width,
        "&:focus-within": {
            color: '#f9d149',
            textShadow: '3px 3px 3px rgba(0, 0, 0, 0.5)',
        },
    }),
    form: props => ({
        width: props.formWidth,
        alignSelf: props.formAlignSelf
    }),
    input: props => ({
        width: '100%',
        height: props.inputHeight,
        border: 'none',
        borderRadius: '32px',
        backgroundColor: '#569ad1',
        paddingLeft: '10px',
        color: 'white',
        fontSize: props.inputTextSize,
        fontWeight: '200',
        marginTop: '-10px',
        outline: 'none',
        '&::placeholder': {
            color: 'white'
        },
    }),
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