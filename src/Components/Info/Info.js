import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import InfoForm from './InfoForm'
import InterestsForm from './InterestsForm'
import Check from '@material-ui/icons/Check';
import Map from './LocationSelect'
import clsx from 'clsx';
import ForwardArrow from '@material-ui/icons/ArrowForwardRounded';
import BackArrow from '@material-ui/icons/ArrowBackRounded';


function Info(props) {

  let history = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState('');
  const [interests, setInterests] = useState([]);
  const [clubs, setClubs] = useState("");
  const [bio, setBio] = useState("");
  const [useCurLoc, set] = useState(true);  
  const [locObj, setLoc] = useState({lat: "", lng:""});  
  const [hasClicked, setClick] = useState(false)

  let formFuncs = {setDegree, setYear, setClubs, setBio, set}
  let interestInfo = {interests, setInterests}
  let infos = {degree, year, interests, clubs, bio, useCurLoc}
  let loc = {locObj, setLoc, useCurLoc, hasClicked, setClick, set}

  let token = props.token

  useEffect(()=> {
    if(props.needInfo===false && props.authenticated===true){
      //props.cookies.set("token", props.token, {path: "/"})
      setTimeout(()=>{
        history.push("/connect")
      }, 4000)
    }
    if(activeStep === steps.length){
      token = props.token
      props.handleInfo({degree, year, interests, clubs, bio, locObj}, token)
    }
  })

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocationInfo);
  }
  
  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    setLoc({lng, lat})
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <div class={classes.back}></div>
      <div class={classes.picBehind}></div>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper style={{backgroundColor: 'rgba(45, 117, 176, 0)'}} alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}><span className={classes.stepLabel}>{label}</span></StepLabel>
            </Step>
          ))}
        </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <div className={classes.final}>
                <img src="/cute_bear.png" />
                <h1 component="h1" variant="h4"> Congratulations! </h1>
                <p> Your account has been successfully created! </p>
              </div>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, formFuncs, infos, loc, interestInfo)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <button onClick={handleBack} className={classes.button}>
                      <BackArrow className={classes.arrowIcon} /> BACK
                    </button>
                  )}
                  <button
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Done' : <span>NEXT <ForwardArrow className={classes.arrowIcon} /></span>}
                  </button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}

export default Info;

const useStyles = makeStyles(theme => ({
  back: {
    zIndex : '-2',
    left: '0',
    top: '0',
    backgroundColor: '#9fc9eb',
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  final: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stepLabel: {
    color: 'white',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    fontSize: '14px',
    fontWeight: '600'
  },
  arrowIcon: {
    color: '#f9d149',
    height: '14px',
    width: '16px'
  },
  picBehind: {
    zIndex: -2,
    left: 0,
    top: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: 'url(/powell.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  layout: {
    width: 'auto',
    position: 'relative',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 750,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    position: 'absolute',
    fontFamily: 'Avenir',
    width: '986px',
    height: '683px',
    fontStyle: 'normal',
    backgroundColor: 'rgba(45, 117, 176, .9)',
    borderRadius: '20px',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    border: 'none',
    outline: 'none',
    color: 'white',
    background: 'none',
    fontSize: '16px',
    fontFamily: 'Avenir',
    fontStyle: 'normal',
    letterSpacing: '1.5px',
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
    
  },
}));

const steps = ['Basic Info', 'Location', 'Interests'];

function getStepContent(step, funcs, infos, loc, interestInfo) {
  switch (step) {
    case 0:
      return <InfoForm {...funcs} {...infos} />;
    case 1:
      return <Map {...loc} />;
    case 2:
      return <InterestsForm {...interestInfo} />;
    default:
      throw new Error('Unknown step');
  }
}

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#f9d149',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#f9d149',
    },
  },
  line: {
    borderColor: '#9fc9eb',
    borderTopWidth: 5,
    borderRadius: 4,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#f9d149',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#f9d149',
  },
  circle: {
    width: 13,
    height: 13,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#f9d149',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}