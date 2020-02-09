
const initialState = {
    authenticated: false;
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
        let response = {success: true}
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