import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

function Chat(props){
    const classes = useStyles();
    const chatUrlBase = "https://bconnect-backend.herokuapp.com"
    const [message, changeMessage] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        changeMessage("")
    }
    const messages = [{author: "you", body: "What's up"}, {author: "him", body: "I'm doing great"}, 
                      {author: "him", body: "I just graduated"}, {author: "you", body: "Did you find a job?"},
                      {author: "you", body: "I hear corona is bad for jobs"}, {author: "him", body: "I found a job at UZLA"},
                      {author: "you", body: "Do you like De Neve"}, {author: "him", body: "No I prefer bplate"},
                      {author: "you", body: "I miss the food there"}, {author: "him", body: "I ate too much"}]

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.tabs}>
                    <p className={classes.name}>Rahul</p>
                </div>
                <div className={classes.messages}>
                    {messages.map((message, i)=>{
                        return <div style={message.author==="you" ? {alignSelf: 'flex-end'} : {alignSelf: 'flex-start'}}>
                            <h4 className={classes.texts} 
                                    style={message.author==="you" ? {backgroundColor: '#2D75AF', color: 'white'} : null} >
                                {message.body}
                            </h4>
                        </div>
                    })}
                </div>
            </div>
            <form className={classes.form} onSubmit={handleSubmit}>
                <input type="text" className={classes.input} value={message}
                    placeholder="Type a message..." onChange={(e)=>changeMessage(e.target.value)} />
             </form>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({ 
    container: {
        position: 'absolute',
        zIndex: '3',
        left: '50px',
        bottom: '0',
        height: '330px',
        width: '280px',
        borderTopLeftRadius: '4%',
        borderTopRightRadius: '4%',
        boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.75)'
    },
    name: {
        margin: '0', 
        marginLeft: '20px',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '18px',
        fontWeight: '800'

    },
    texts: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '13px',
        fontWeight: '400',
        margin: '9px',
        marginBottom: '12px',
        display: 'inline-block',
        backgroundColor: 'lightgray',
        borderRadius: '20px',
        padding: '11px',
        color: 'black'
    },
    messages: {
        height: '83%',
        width: '100%',
        display: 'block',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column'
    },
    tabs: {
        height: '17%',
        width: '100%',
        boxShadow: '0 2px 2px -2px black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    content: {
        width: '100%',
        height: '285px',
        backgroundColor: 'white',
        borderTopLeftRadius: '4%',
        borderTopRightRadius: '4%',
    },
    form: {
        width: '100%',
        height: '45px'
    },
    input: {
        borderTop: '1px solid lightgray',
        width: '280px',
        height: '45px',
        border: 'none',
        outline: 'none',
        backgroundColor: 'white',
        fontSize: '15px',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        boxSizing: 'border-box',
        paddingLeft: '8px',
        paddingRight: '-8px'
    }
}))

export default Chat;