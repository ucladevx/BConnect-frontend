import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
 

//POSSIBLE TODO: make base url an env variable, can easily be changed within heroku if necessary
// in the form: const baseUrl = process.env.REACT_APP_BASE_URL

//MAIN BACKEND
const baseUrl = "https://bconnect-backend.herokuapp.com"

//TESTING BACKEND
// const baseUrl = "https://bconnect-backend-testing.herokuapp.com/"

const CORSurl = "https://cors-anywhere.herokuapp.com/";

const AUTH_FAILURE = "AUTH_FAILURE"
const AUTH_SUCCESS = "AUTH_SUCCESS"
const AUTH_LOGOUT = "AUTH_LOGOUT"

const INFO_UPDATE_SUCCESS = "INFO_UPDATE_SUCCESS"
const INFO_UPDATE_FAILURE = "INFO_UPDATE_FAILURE"


const initialState = {
    authenticated: checkSession(),
    needInfo: true,
    error: null,
    user: checkUser(),
    token: checkToken()
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_FAILURE:
            return {...state, error: action.err};
        case AUTH_SUCCESS:
            return {...state, authenticated: true, user: action.user, token: action.token, error: null}
        case AUTH_LOGOUT:
            return {...state, authenticated: false, needInfo: true, user: action.user, token: action.token}
        case INFO_UPDATE_SUCCESS:
            return {...state, needInfo: false, user: action.user}
        case INFO_UPDATE_FAILURE:
            return {...state, error: action.err}
      default:
        return state;
    }
}


export const login = (username, password) => async (dispatch) => {
    try {
        let response = await axios.post(`${baseUrl}/login`, {username, password})
        
        if(response.data === "" || response.status !== 200){
            throw new Error("Invalid username or password")
        }
        let {user, token} = response.data
        dispatch({type: AUTH_SUCCESS, user: user, token: token})
        cookies.set("token", token, {path: '/'});
        cookies.set("bconnect_user", user, {path: '/'});
        setTokenHeader(response.data.token);
    } catch(err){
        dispatch({type: AUTH_FAILURE, err: err.message})
    }

   
};

  
export const logout = () => async (dispatch) => {
    dispatch({type: AUTH_LOGOUT, user: {}, token: ""})
    setTokenHeader(null);
    cookies.set("token", null, {path: '/'});
    cookies.set("bconnect_user", null, {path: '/'});
};


export const register = (username, password, firstname, lastname) => async (dispatch) => {
    try {
        if(username === "" || password === "" || firstname === "" || lastname === ""){
            throw new Error("Cannot leave inputs empty")
        } else if (username.match(/.*@ucla.edu/g) == null && username.match(/.*@g.ucla.edu/g) == null){
            throw new Error("Please enter a valid UCLA email address")
        }
        let response = await axios.post(`${baseUrl}/signup`, {username, password, firstname, lastname})
        
        if(response.status !== 200){
            throw new Error("Error in creating new account")
        }
        let {user, token} = response.data
        dispatch({type: AUTH_SUCCESS, user: user, token: token})
        cookies.set("token", token, {path: '/'});
        cookies.set("bconnect_user", user, {path: '/'});
        setTokenHeader(response.data.token);
    } catch(err){
        dispatch({type: AUTH_FAILURE, err: err.message})
    }
};

export const addInfo = (data) => async (dispatch) => {
    try {
        let token = cookies.get("token")
        let major = "degree" in data ? data.degree : ""
        let gradyear = "year" in data ? data.year : ""
        let interests = "interests" in data ? data.interests : []
        let age = "age" in data ? data.age : ""
        let currentjob = "currentjob" in data ? data.currentjob : ""
        let gender = "gender" in data ? data.gender : ""
        let locObj = "locObj" in data ? data.locObj : {}
        let lat = "lat" in locObj ? locObj.lat : {}
        let lon = "lng" in locObj ? locObj.lng : {}
        console.log({major, gradyear, interests, age, gender, currentjob, lat, lon})
        let response = await axios.post(`${CORSurl}${baseUrl}/auth/change`, 
            {major, gradyear, interests, age, gender, currentjob, lat, lon}, {headers: {"x-access-token": token}})
        if(response.status !== 200){
            throw new Error("Could not update info")
        }
        console.log(response)
        dispatch({type: INFO_UPDATE_SUCCESS, user: response.data.mod_user})
        cookies.set("bconnect_user", response.data.mod_user, {path: '/'});
    } catch(err){
        dispatch({type: INFO_UPDATE_FAILURE, err: err.message})
    }
}

function setTokenHeader(token) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
      delete axios.defaults.headers.common["Authorization"]
    }
}

function checkSession() {
    let token = cookies.get("token");
    if(token){
        token = jwt.decode(token);
        if (token && token.hasOwnProperty("UUID") && Date.now().valueOf()/1000 < token.StandardClaims.exp) {
            return true;
          }
    }
    return false;
}

function checkToken() {
    let token = cookies.get("token");
    if(token)
        return token;
    return "";
}

function checkUser() {
    let user = cookies.get("bconnect_user")
    if(user){
        return user
    }
    return {}
}