//import { push } from 'connected-react-router'

const AUTH_FAILURE = "AUTH_FAILURE"
const AUTH_SUCCESS = "AUTH_SUCCESS"
const AUTH_LOGOUT = "AUTH_LOGOUT"

const initialState = {
    authenticated: false,
    error: null,
    user: {}
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_FAILURE:
            return {...state, error: action.err};
        case AUTH_SUCCESS:
            return {...state, authenticated: true, user: action.user, error: null}
        case AUTH_LOGOUT:
            return {...state, authenticated: false}
      default:
        return state;
    }
}


export const login = (username, password) => async (dispatch) => {
    try {
        //let response = await axios.post('some-server/some-endpoint', {username, password})
        var response = {success: true, data: {
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
        }}
        if(username != "thomas" || password != "thomas" || !response.success){
            throw new Error("Invalid username or password")
        }
        dispatch({type: AUTH_SUCCESS, user: response.data.user})
    } catch(err){
        dispatch({type: AUTH_FAILURE, err: err.message})
    }

   
};

  
export const logout = () => async (dispatch) => {
    dispatch({type: AUTH_LOGOUT})
};


export const register = (username, password) => async (dispatch) => {
    try {
        //let response = await axios.post('some-server/some-endpoint-register', {username, password})
        var response = {success: true, data: {user:{name:'not complete'}}}
        if(!response.success){
            throw new Error("Error in creating new account")
        }
        dispatch({type: AUTH_SUCCESS})
    } catch(err){
        dispatch({type: AUTH_FAILURE, err: err.message})
    }
};