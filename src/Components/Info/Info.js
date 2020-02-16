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
import Check from '@material-ui/icons/Check';
import Map from './LocationSelect'
import clsx from 'clsx';

function Info(props) {
  let history = useHistory();
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [degree, setDegree] = useState("");
  const [year, setYear] = useState('');
  const [interests, setInterests] = useState("");
  const [clubs, setClubs] = useState("");
  const [bio, setBio] = useState("");
  const [useCurLoc, set] = useState(true);  
  const [locObj, setLoc] = useState({lat: "", lng:""});  
  const [hasClicked, setClick] = useState(false)

  let formFuncs = {setDegree, setYear, setInterests, setClubs, setBio, set}
  let infos = {degree, year, interests, clubs, bio, useCurLoc}
  let loc = {locObj, setLoc, useCurLoc, hasClicked, setClick}

  useEffect(()=> {
    if(props.needInfo===false && props.authenticated===true){
      history.push("/")
    }
    if(activeStep === steps.length){
      props.handleInfo({degree, year, interests, clubs, bio, locObj})
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
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                
                
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, formFuncs, infos, loc)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
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
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 750,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
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
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Important Info', 'Location', 'Find other Bruins!'];

function getStepContent(step, funcs, infos, loc) {
  switch (step) {
    case 0:
      return <InfoForm {...funcs} {...infos} />;
    case 1:
      return <Map {...loc} />;
    case 2:
      return <h2>Skippable</h2>;
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
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
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