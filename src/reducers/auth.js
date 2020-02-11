const AUTH_FAILURE = Symbol();
const AUTH_SUCCESS = Symbol();
const AUTH_LOGOUT = Symbol();

const initialState = {
    authenticated: false,
    error: ""
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_FAILURE:
            return state;
        case AUTH_SUCCESS:
            return {...state, authenticated: true}
        case AUTH_LOGOUT:
            return {...state, authenticated: false}
      default:
        return state;
    }
}


export const login = (username, password) => async (dispatch) => {
    try {
        //let response = await axios.post('some-server/some-endpoint', {username, password})
        var response = {success: true, data: {}}
    } catch(err){
        dispatch({type: AUTH_FAILURE})
    }

    if(response.success){
        dispatch({type: AUTH_SUCCESS})
    }
};

  
export const logout = (error)=> async (dispatch) => {
    dispatch({type: AUTH_LOGOUT})
};


export const register = (username, password) => async (dispatch) => {
    try {
        //let response = await axios.post('some-server/some-endpoint-register', {username, password})
        var response = {success: true, data: {}}
    } catch(err){
        dispatch({type: AUTH_FAILURE})
    }

    if(response.success){
        dispatch({type: AUTH_SUCCESS})
    }
};