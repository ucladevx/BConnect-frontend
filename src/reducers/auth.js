import axios from 'axios';
import jwt from 'jsonwebtoken';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
 


const baseUrl = "https://protected-refuge-33249.herokuapp.com"
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
    user: {},
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
        console.log(response.data)
        /*var response = {success: true, data: {
            user: {name: "Dan Smith", 
                    job: "Software Engineer",
                    interests: ["Biking", "Reading", "Boxing"],
                    friends: ["object_id1", "object_id2"],
                    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae imperdiet quam. 
                    Nullam blandit ipsum quis dapibus placerat. Suspendisse mauris eros, 
                    fringilla at augue in, tempus tincidunt lectus. Phasellus interdum dui a sagittis tempor. 
                    Ut lorem nisl, faucibus ut dictum at, cursus sit amet diam. Phasellus lectus nulla, blandit 
                    sit amet imperdiet sit amet, rutrum at nisi. Duis vel sagittis augue, in egestas mi. In ac auctor 
                    sem. Etiam sit amet magna hendrerit, congue felis et, pharetra risus. Sed ac luctus libero. 
                    Praesent pretium libero nisl, eget aliquam ex eleifend quis. Curabitur blandit magna sed erat 
                    dignissim molestie. Maecenas vitae auctor est, non dapibus velit. In hac habitasse platea dictumst.
                     Maecenas vel diam nec magna convallis dignissim. Nunc egestas maximus dignissim. Ut vel erat dolor.`
            }
        }}*/
        if(response.data === "" || response.status !== 200){
            throw new Error("Invalid username or password")
        }
        dispatch({type: AUTH_SUCCESS, user: response.data.user, token: response.data.token})
        cookies.set("token", response.data.token, {path: '/'});
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


export const register = (username, password, fname, lname) => async (dispatch) => {
    try {
        if(username === "" || password === "" || fname === "" || lname === ""){
            throw new Error("Cannot leave inputs empty")
        } else if (username.match(/.*@ucla.edu/g) == null){
            throw new Error("Please enter a valid UCLA email address")
        }
        let response = await axios.post(`${baseUrl}/signup`, {username, password, fname, lname})
        //var response = {success: true, data: {user:{name:'not complete'}}}
        if(response.status !== 200){
            throw new Error("Error in creating new account")
        }
        dispatch({type: AUTH_SUCCESS, user: response.data.user, token: response.data.token})
        cookies.set("token", response.data.token, {path: '/'});
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
        let clubs = "clubs" in data ? data.clubs : ""
        let bio = "bio" in data ? data.bio : ""
        let locObj = "locObj" in data ? data.locObj : {}

        let response = await axios.post(`${CORSurl}${baseUrl}/auth/change`, {degree, year, interests, clubs, bio, locObj}, {
            headers: {"x-access-token": token}
        })
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