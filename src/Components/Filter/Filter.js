import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Slider from '@material-ui/core/Slider';

const and = "&"
const filler = { "Food Drink":["Baking", "Cooking", "Trying new foods", "Wine tasting", "Vegan", "Vegetarian"],
                    "Arts Entertainment":["Reading and writing", "Going to concerts", "Photography",
                        "Watching Movies", "Drawing and Painting", "Dancing", "Singing", "Playing an instrument"],
                    "Sports Activites": ["Hiking", "Exploring", "Backpacking", "Camping", "Working out", "Tennis",
                        "Basketball", "Yoga", "Biking", "Running", "Swimming", "Rock climbing", "Baseball", "Football", "Soccer"],
                    "Puzzles Games": ["Video games", "Board games", "Trivia", "Chess", "Puzzles", "Escape rooms"]}

function Filter(props){
    const classes = useStyles();
    const [interests, setInterests] = useState([])
    const [distance, changeDistance] = useState(30)

    const moveSlider = (e) => {
        let distance = e.target.ariaValueNow
        if(distance !== null)
            changeDistance(distance)       
    }

    return (
        <div className={classes.main} style={{right: '250px'}}>
           <div className={classes.content}>
                <div style={{marginTop: '10px', marginBottom: '10px'}}>
                    <div className={classes.distanceTextBox}>
                        <p className={classes.text}>Maximum Distance</p>
                        <p className={classes.text} style={{color: '#9FC9EB'}}>{distance}</p>
                    </div>
                    <PrettoSlider className={classes.slider} defaultValue={30} step={1} min={1} max={100} 
                        onChange={moveSlider}
                        />
                </div>
                {Object.keys(filler).map((item, index)=>{
                    return <div key={index} style={{width: '400px'}}>
                        <h2 className={classes.categoryTitle}>{item.split(" ")[0]} <span style={{color: '#F9D149'}}>{and}</span> {item.split(" ")[1]}</h2>
                        <div style={{display: 'flex', flexWrap: 'wrap'}}>
                            {filler[item].map((item2, index2)=>{
                                return <Chip key={index2} className={classes.chip} label={item2}  
                                variant="outlined" onClick={(e)=>{
                                if(interests.includes(item2)){
                                    setInterests(interests.filter((it)=>{return it !== item2}))
                                } else {
                                    setInterests([...interests, item2]);
                                }
                                }} style={interests.includes(item2) ? {backgroundColor:"#225883"} : {backgroundColor: "#9FC9EB"}} />
                            })}
                        </div>
                    </div>
                })}
                <p className={classes.remove} onClick={()=>{setInterests([])}}>x Remove All</p>
           </div>
        </div>
    )
}

export default Filter;

const useStyles = makeStyles((theme) => ({ 
    main: {
        position: 'absolute',
        height: '100%',
        width: '500px',
        backgroundColor: '#2D75AF',
        borderRadius: '30px',
        zIndex: '2',
        overflow: 'scroll'
    },
    text: {
        fontWeight: '300',
        fontSize: '16px',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal'
    },
    content: {
        marginTop: '45px',
        zIndex: '3',
        paddingLeft: '55px',
        paddingRight: '50px'
    },
    categoryTitle: {
        fontWeight: '300',
        fontSize: '17px',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal'
    },
    distanceTextBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    slider: {
        width: '395px',
    },
    remove: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '13px',
        color: '#F9D149',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        float: 'right',
        cursor: 'pointer',
        marginTop: '0'
    },
    chip: {
        padding: '7px',
        margin: '5px',
        border: 'none',
        color: 'white',
        fontSize: '12px',
        fontWeight: '400',
        borderRadius: '25px',
        transition: "backgroundColor .5",
        fontFamily: 'Avenir',
        fontStyle: 'normal'
    },
    search: {
        width: '350px',
        borderRadius: '33px',
        color: 'white',
        fontSize: '18px',
        outline: 'none',
        border: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.54)',
        height: '27px',
        padding: '5px',
        fontWeight: '300',
        paddingLeft: '14px',
        paddingRight: '-14px',
        '&::placeholder': {
            color: 'white',
            fontSize: '18px',
            fontWeight: '500',
            fontFamily: 'Avenir',
            paddingLeft: '14px',
            paddingRight: '-14px',
          },
    }
}))

const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#F9D149',
      marginTop: -7,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 5,
      borderRadius: 4,
      backgroundColor: '#5791BF'
    },
    rail: {
      height: 5,
      backgroundColor: '#5791BF',
      borderRadius: 4,
    },
  })(Slider);