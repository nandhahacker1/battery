const initialState = []

const apiData = (state = initialState, action) => {
    switch (action.type) {
        case "SET_API_DATA":
            return {
                state: action.data
            }
        default:
            return state;
    }
}

export default apiData;