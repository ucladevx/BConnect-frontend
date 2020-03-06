import axios from 'axios';
const baseUrl = "https://protected-refuge-33249.herokuapp.com"
const CORSurl = "https://cors-anywhere.herokuapp.com/";

const AUTH_FAILURE = "AUTH_FAILURE"
const AUTH_SUCCESS = "AUTH_SUCCESS"
const AUTH_LOGOUT = "AUTH_LOGOUT"

const INFO_UPDATE_SUCCESS = "INFO_UPDATE_SUCCESS"
const INFO_UPDATE_FAILURE = "INFO_UPDATE_FAILURE"

const initialState = {
    authenticated: false,
    needInfo: true,
    error: null,
    user: {},
    token: ""
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_FAILURE:
            return {...state, error: action.err};
        case AUTH_SUCCESS:
            return {...state, authenticated: true, user: action.user, token: action.token, error: null}
        case AUTH_LOGOUT:
            return {...state, authenticated: false, needInfo: true}
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
        if(response.data === "" || response.status !== 200){
            throw new Error("Invalid username or password")
        }
        dispatch({type: AUTH_SUCCESS, user: response.data.user, token: response.data.token})
        dispatch({type: INFO_UPDATE_SUCCESS})
    } catch(err){
        dispatch({type: AUTH_FAILURE, err: err.message})
    }

   
};

  
export const logout = () => async (dispatch) => {
    dispatch({type: AUTH_LOGOUT, user: {}, token: ""})
};


export const register = (username, password, fname, lname) => async (dispatch) => {
    try {
        if(username === "" || password === "" || fname === "" || lname === ""){
            throw new Error("Cannot leave inputs empty")
        }
        let response = await axios.post(`${baseUrl}/signup`, {username, password, fname, lname})
        //var response = {success: true, data: {user:{name:'not complete'}}}
        if(response.status !== 200){
            throw new Error("Error in creating new account")
        }
        console.log(response.data.token)
        dispatch({type: AUTH_SUCCESS, user: response.data.user, token: response.data.token})
    } catch(err){
        dispatch({type: AUTH_FAILURE, err: err.message})
    }
};

export const addInfo = (data, token) => async (dispatch) => {
    try {
        let response = await axios.post(`${CORSurl}${baseUrl}/auth/change`, {data}, {
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