import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
 

//TODO: make base url an env variable, can easily be changed within heroku if necessary
// in the form: const baseUrl = process.env.REACT_APP_BASE_URL
const baseUrl = "https://bconnect-backend.herokuapp.com"
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
            return {...state, needInfo: false}
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
};


export const register = (username, password, firstname, lastname) => async (dispatch) => {
    try {
        if(username === "" || password === "" || firstname === "" || lastname === ""){
            throw new Error("Cannot leave inputs empty")
        } else if (username.match(/.*@ucla.edu/g) == null && username.match(/.*@g.ucla.edu/g) == null){
            throw new Error("Please enter a valid UCLA email address")
        }
        let response = await axios.post(`${baseUrl}/signup`, {username, password, firstname, lastname})
        //var response = {success: true, data: {user:{name:'not complete'}}}
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

export const addInfo = (data, token) => async (dispatch) => {
    try {
        let degree = "degree" in data ? data.degree : ""
        let year = "year" in data ? data.year : ""
        let interests = "interests" in data ? data.interests : []
        let age = "age" in data ? data.age : ""
        let currentjob = "currentjob" in data ? data.currentjob : ""
        let gender = "gender" in data ? data.gender : ""
        let locObj = "locObj" in data ? data.locObj : {}
        let lat = "lat" in locObj ? locObj.lat : {}
        let lon = "lng" in locObj ? locObj.lng : {}
    
        let response = await axios.post(`${CORSurl}${baseUrl}/auth/change`, 
        {degree, year, interests, age, gender, currentjob, lat, lon}, {headers: {"x-access-token": token}})
        if(response.status !== 200){
            throw new Error("Could not update info")
        }
        dispatch({type: INFO_UPDATE_SUCCESS})
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