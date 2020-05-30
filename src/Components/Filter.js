import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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
    const [search, setSearch] = useState("")

    return (
        <div className={classes.main} style={{right: '279px'}}>
           <div className={classes.content}>
                <input value={search} type="text" placeholder="Search" className={classes.search}
                    onChange={(e)=>{setSearch(e.target.value)}} />
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
           </div>
        </div>
    )
}

export default Filter;

const useStyles = makeStyles((theme) => ({ 
    main: {
        position: 'absolute',
        height: '100%',
        width: '480px',
        backgroundColor: '#2D75AF',
        borderRadius: '30px',
        zIndex: '2',
    },
    content: {
        margin: 'auto',
        marginTop: '30px',
        zIndex: '3',
        padding: '20px'
    },
    categoryTitle: {
        fontWeight: '500',
        fontSize: '16px',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal'
    },
    chip: {
        padding: '10px',
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
        width: '380px',
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
            fontWeight: '300',
            fontFamily: 'Avenir',
            paddingLeft: '14px',
            paddingRight: '-14px',
          },
    }
}))