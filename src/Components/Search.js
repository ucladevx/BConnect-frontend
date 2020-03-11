import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';
import Skeleton from '@material-ui/lab/Skeleton';

const drawerWidth = 460;

export default function Search(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [check, setCheck] = useState({
    interests: false,
    gradyear: false,
    major: false
  });
  const [distance, setDistance] = useState(5)
  const [look, setLook] = useState(false)

  const handleChange = name => event => {
    setCheck({ ...check, [name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <div className={classes.drawerHeader}>
            <IconButton onClick={props.toggle}> {theme.direction === 'ltr' ? <CancelIcon /> : null}</IconButton>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom> Search For Other Bruins </Typography>
        {!look ? 
        <React.Fragment>
        <Divider />
            <div className={classes.formBox}>
                <FormControlLabel
                    control={ <Checkbox checked={check.checkedB} onChange={handleChange('major')}
                        value="major" color="primary" />
                    } label="Major"
                />
                <FormControlLabel
                    control={ <Checkbox checked={check.checkedB} onChange={handleChange('gradyear')}
                        value="gradyear" color="primary" />
                    } label="Graduation Year"
                />
                <FormControlLabel
                    control={ <Checkbox checked={check.checkedB} onChange={handleChange('interests')}
                        value="interests" color="primary" />
                    } label="Interests"
                />
            </div>
            <div className={classes.sliderBox}>
                <Typography variant="subtitle1" gutterBottom> Distance </Typography>
                <IOSSlider aria-label="ios slider" min={0} max={60} aria-labelledby="discrete-slider"
                    defaultValue={distance}    marks={marks}/>
            </div>
            <Button onClick={()=>{ console.log("looking for other Bruins!"); setLook(true) }} color="primary">Search!</Button>
        <Divider />
        </React.Fragment>
        : <div style={{padding: '15px'}}>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
            <Skeleton height={70}/>
        </div>}
      </Drawer>
    </div>
  );
}

const marks = [
    {value: 0, label: '0 m'},
    {value: 20,label: '20 m'},
    {value: 40,label: '40 m'},
    {value: 60,label: '60 m'},
];
  
  const IOSSlider = withStyles({
    root: {
      color: '#3880ff',
      height: 2,
      padding: '15px 0',
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
      marginTop: -14,
      marginLeft: -14,
      '&:focus,&:hover,&$active': {
        boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
        },
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 11px)',
      top: -22,
      '& *': {
        background: 'transparent',
        color: '#000',
      },
    },
    track: {
      height: 2,
    },
    rail: {
      height: 2,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    mark: {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      marginTop: -3,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      zIndex: 0
    },
    margin: {
        height: theme.spacing(3),
    },
    title: {
        textAlign: 'center',
        fontSize: '34px',
        fontWeight: '300',
        color: '#1793eb'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    formBox: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: '15px'
    },
    sliderBox: {
        margin: '20px 0px',
        padding: '5px 20px'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    toolbar: theme.mixins.toolbar,
  }));