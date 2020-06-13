import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import PlaceIcon from '@material-ui/icons/Place';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Profile(props){
    const classes = useStyles();
    const [edit, changeMode] = useState(false)
    const {firstname, lastname, currentjob, gender, lat, lon, gradyear, age, major} = props.user

    const [jobEdit, changeJob] = useState(currentjob)
    const [genderEdit, changeGender] = useState(gender)
    const [gradEdit, changeGradYear] = useState(gradyear)
    const [ageEdit, changeAge] = useState(age)
    const [majorEdit, changeMajor] = useState(major)
    const [updated, changeStatus] = useState(false)

    const handleDone = () => {
        changeMode(false)
        changeStatus(true)
        props.updateUser({currentjob: jobEdit, gender: genderEdit, year: gradEdit, age: ageEdit, degree: majorEdit})
    }
    
    return (
        <div className={classes.main} style={{right: '250px'}}>
            <div className={classes.content}>
                <div className={classes.editBar}>
                    {edit===false ? (<React.Fragment><p className={classes.edit} onClick={()=>changeMode(true)}>Edit</p>
                    <CreateOutlinedIcon style={{height: '20px'}}/></React.Fragment>)
                    : <p className={classes.edit} onClick={handleDone}>Done</p> }
                </div>
                <h3 className={classes.labelText} style={{marginTop: '-14px'}}>Hey there,</h3>
                <h1 className={classes.name}>{firstname} {lastname}</h1>
                <div className={classes.locationBox}>
                    <PlaceIcon className={classes.placeIcon}/>
                    <div className={classes.locationTextBox}>
                        <h3 style={{margin: '0', fontSize: '24px'}}>My Current Location</h3>
                        <p style={{margin: '0', color: '#5791BF', fontSize: '16px'}}>{lat},{lon}</p>
                    </div>
                </div>
                <div className={classes.infoBoxMain}>
                    <div className={classes.infoPair}>
                        <h3 className={classes.labelText}>Age</h3>
                        {edit===false ? <div className={classes.infoBox}>{updated===false ? age : ageEdit}</div>
                            : <input type="text" className={classes.infoBox} value={ageEdit}
                               onChange={(e)=>{changeAge(e.target.value)}} />
                        }
                    </div>
                    <div className={classes.infoPair}>
                        <h3 className={classes.labelText}>Gender</h3>
                        {edit===false ? <div className={classes.infoBox}>{updated===false ? gender : genderEdit}</div>
                            : <input type="text" className={classes.infoBox} value={genderEdit}
                                onChange={(e)=>{changeGender(e.target.value)}} />
                        }
                    </div>
                    <div className={classes.infoPair}>
                        <h3 className={classes.labelText}>Class of</h3>
                        {edit===false ? <div className={classes.infoBox}>{updated===false ? gradyear : gradEdit}</div>
                            : <input type="text" className={classes.infoBox} value={gradEdit}
                                onChange={(e)=>{changeGradYear(e.target.value)}} />
                        }
                    </div>
                    <div className={classes.infoPair}>
                        <h3 className={classes.labelText}>Major</h3>
                        {edit===false ? <div className={classes.infoBox}>{updated===false ? major : majorEdit}</div>
                            : <input type="text" className={classes.infoBox} value={majorEdit}
                                onChange={(e)=>{changeMajor(e.target.value)}} />
                        }
                    </div>
                </div>
                <h3 className={classes.labelText}>Current Job</h3>
                {edit===false ? <div className={classes.infoBox} style={{width: 'auto'}}>
                        {updated===false ? currentjob : jobEdit}</div>
                    : <input type="text" className={classes.infoBox} value={jobEdit}
                    onChange={(e)=>{changeJob(e.target.value)}} style={{width: '388px'}}/>
                }
                <div >
                    <h3 className={classes.labelText}>Connect</h3>
                    <div className={classes.socialBox}>
                        <LinkedInIcon style={{color: '#1DA1F2'}} className={classes.tempIcon}/>
                        <p>LinkedIn</p>
                    </div>
                    <div className={classes.socialBox}>
                        <TwitterIcon style={{color: '#1DA1F2'}} className={classes.tempIcon}/>
                        <p>Twitter</p>
                    </div>
                    <div className={classes.socialBox}>
                        <InstagramIcon style={{height: '42px',borderRadius: '12px',
                            background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'}}
                             className={classes.tempIcon}/>
                        <p>Instagram</p>
                    </div>
                    <div className={classes.socialBox}>
                        <FacebookIcon style={{color: '#0015ff'}} className={classes.tempIcon} />
                        <p>Facebook</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;

const useStyles = makeStyles((theme) => ({ 
    main: {
        position: 'absolute',
        height: '100%',
        width: '500px',
        backgroundColor: '#2D75AF',
        borderRadius: '30px',
        zIndex: '2',
        overflow: 'scroll',
    },
    content: {
        position: 'absolute',
        margin: '0',
        padding: '40px',
        zIndex: '3'
    },
    editBar: {
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    edit: {
        cursor: 'pointer',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '12px',
        textDecoration: 'underline',
        fontWeight: '500',
        marginRight: '6px'
    },
    labelText: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '24px',
        fontWeight: '800',
        color: '#F9D148',
        textAlign: 'center'
    }, 
    name: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '60px',
        fontWeight: '800',
        color: 'white',
        width: '400px',
        overflow: 'hidden',
        textAlign: 'center',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginTop: '-10px'
    },
    locationBox: {
        backgroundColor: '#225883',
        borderRadius: '12px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        height: '72px'
    },
    locationTextBox: {
        display: 'flex',
        flexDirection: 'column'
    },
    placeIcon: {
        color: '#F9D048', 
        height: '50px', 
        width: '43px',
        marginLeft: '15px',
        marginRight: '15px'
    },
    infoBox: {
        backgroundColor: '#225883',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '300',
        padding: '16px',
        width: '170px',
        height: '13px',
        outline: 'none',
        border: 'none',
        marginTop: '-15px',
        marginBottom: '-5px',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    socialBox: {
        backgroundColor: '#225883',
        borderRadius: '20px',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        color: 'white',
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontSize: '14px',
        fontWeight: '300',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        marginTop: '24px'
    },
    tempIcon: {
        height: '46px',
        width: '42px',
        marginLeft: '10px',
        marginRight: '15px'
    },
    infoPair: {
        display: 'flex',
        flexBasis: '30%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoBoxMain: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}))