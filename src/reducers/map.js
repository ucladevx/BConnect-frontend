
const FETCH_SUCCESS = "FETCH_SUCCESS"
const FETCH_ERR = "FETCH_ERR"

const initialState = {
    markers: [],
    error: ""
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
                    {lat: 34.1, lng: -118.446569, name: "Thomas Kamm", major: "Computer Science", year: "2023", interests: ["Cooking", "Rock climbing", "Baking"]},
                    {lat: 34.08, lng: -118.4558, name: "Saachi Kudtarkar", major: "Computer Science", year: "2023", interests: ["Cooking", "Rock climbing", "Baking"]},
                    {lat: 34.3, lng: -118.449657, name: "Shreya Chatterjee", major: "Computer Science", year: "2023", interests: ["Cooking", "Rock climbing", "Baking"]},
                    {lat: 34.2, lng: -118.449658, name: "Rahul Natarajan", major: "Computer Science", year: "2023", interests: ["Cooking", "Rock climbing", "Baking"]},
                    {lat: 34.04, lng: -118.449659, name: "Leonard Wang", major: "Computer Science", year: "2023", interests: ["Cooking", "Rock climbing", "Baking"]},
                    {lat: 34.3, lng: -118.4496, name: "Sue Ellen Zhang", major: "Computer Science", year: "2023", interests: ["Cooking", "Rock climbing", "Baking"]},
                    {lat: 34.9, lng: -118.449559, name: "John Smith", major: "Computer Science", year: "2023", interests: ["Cooking", "Rock climbing", "Baking"]},
                    {lat: 34.078, lng: -118.445599, name: "Anna Doe", major: "Computer Science", year: "2023", interests: ["Cooking", "Rock climbing", "Baking"]}
                    ]
        }}
    } catch(err){
        dispatch({type: FETCH_ERR, err})
    }

    if(response.success){
        dispatch({type: FETCH_SUCCESS, markers: response.data.markers})
    }
};
