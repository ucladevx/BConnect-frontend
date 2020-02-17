
const FETCH_SUCCESS = "FETCH_SUCCESS"
const FETCH_ERR = "FETCH_ERR"

const initialState = {
    markers: [],
    error: "",
    infoDisplay: false
}

export function mapReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUCCESS:
            return {...state, markers: action.markers};
        case FETCH_ERR:
            return {...state, error: action.err}
        default:
        return state;
    }
}

export const fetchMarkers = () => async (dispatch) => {
    try {
        //let response = await axios.post('some-server/some-endpoint-get-markers')
        var response = {success: true, 
            data: {
                markers: [
                    {lat: 34.1, lng: -118.446569},
                    {lat: 34.08, lng: -118.4558},
                    {lat: 34.3, lng: -118.449657},
                    {lat: 34.2, lng: -118.449658},
                    {lat: 34.04, lng: -118.449659},
                    {lat: 34.3, lng: -118.4496},
                    {lat: 34.9, lng: -118.449559},
                    {lat: 34.078, lng: -118.445599}
                    ]
        }}
    } catch(err){
        dispatch({type: FETCH_ERR, err})
    }

    if(response.success){
        dispatch({type: FETCH_SUCCESS, markers: response.data.markers})
    }
};
