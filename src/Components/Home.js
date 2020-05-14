import React, {useState} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Home(props){
    const [email, changeEmail] = useState("")
    const [submitted, changeSubmitStatus] = useState(false)
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    let cssProps;

    if(vw > 0 && vw < 450 && vh > 0 && vh < 850){
        cssProps = {bconnectMarginLeft: '3vh', bconnectSize: '3vh',
                locIconSize: '2.4vh', locIconMargin: '-1.35vh', locIconMarginBottom: '-0.75vh',
                imgWidth: '80%', imgHeight: '',
                mainWidth: '90vw', mainHeight: '90vh', mainMinHeight: '0px', mainMinWidth: '0px', mainJustify: 'center', mainAlign: 'center', mainDirection: 'column-reverse',
                leftMinWidth: '0px', leftWidth: '60%', leftAlignSelf: 'center', leftJustify: 'flex-start', leftAlign: 'flex-start',
                text1Size: '3vh', text1LineHeight: '3.6vh',
                text2Size: '2vh', text2LineHeight: '2.5vh', text2Width: '100%', text2Align: 'center',
                formWidth: '100%', formAlignSelf: '',
                inputTextSize: '10px', inputHeight: '30px', inputPaddingLeft: '15px'}
    } else {
        cssProps = {bconnectMarginLeft: '55px', bconnectSize: '60px',
                locIconSize: '48px', locIconMargin: '-27px', locIconMarginBottom: '-15px',
                imgWidth: '', imgHeight: '100%',
                mainWidth: '85vw', mainHeight: '70vh', mainMinHeight: '0px', mainMinWidth: '0x', mainJustify: 'center', mainAlign: 'stretch', mainDirection: 'row',
                leftMinWidth: '460px', leftWidth: '30%', leftAlignSelf: 'flex-start', leftJustify: 'center', leftAlign: 'flex-start',
                text1Size: '80px', text1LineHeight: '80px',
                text2Size: '20px', text2LineHeight: '24px', text2Width: '80%', text2Align: 'flex-start',
                formWidth: '305px', formHeight: '35px', formAlignSelf: 'flex-start',
                inputTextSize: '14px', inputPaddingLeft: '33px'}
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
                <div class={classes.left} >
                    <div>
                        <Typography class={classes.text1}> Meet <span style={{color: '#f9d149'}}>UCLA</span> </Typography>
                        <Typography class={classes.text1}>alumni near</Typography>
                        <Typography class={classes.text1}><span style={{color:'#9fc9eb'}}>you</span>.</Typography>
                    </div>
                    <Typography class={classes.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi amet tincidunt sed non auctor laoreet. 
                        Metus faucibus feugiat fermentum lectus aliquam. Quisque mi cursus in auctor nibh ornare sapien non quis. Pellentesque eu leo ullamcorper id dignissim euismod.
                    </Typography>
                    <form onSubmit={submit} class={classes.form}>
                        {submitted===false ? <input value={email} onChange={(e)=>{changeEmail(e.target.value)}} placeholder="Enter your UCLA email" 
                            type='text' class={classes.input}/> :
                            <input value={email} placeholder="Enter your UCLA email" 
                            type='text' disabled class={classes.input}/>
                        }
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
        flexDirection: props.mainDirection,
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
        width: props.imgWidth,
        //alignSelf: 'center',
        height: props.imgHeight,
        zIndex: '0'
    }),
    left: props => ({
        display:'flex',
        height: '100%',
        flexDirection:'column',
        justifyContent: props.leftJustify,
        minWidth: props.leftMinWidth,
        alignItems: props.leftAlign, 
        zIndex: '1',
        width: props.leftWidth,
        alignSelf: props.leftAlignSelf
        //marginRight: '-20px',
    }),
    text2: props => ({
        fontWeight: 'normal',
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
        height: props.formHeight,
        alignSelf: props.formAlignSelf
    }),
    input: props => ({
        width: '100%',
        height: '100%',
        border: 'none',
        borderRadius: '8px',
        backgroundColor: 'rgba(159, 201, 235, 0.37)',
        paddingLeft: '10px',
        color: 'white',
        fontSize: props.inputTextSize,
        fontWeight: '200',
        marginTop: '-10px',
        outline: 'none',
        '&::placeholder': {
            color: '#bfccd9'
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