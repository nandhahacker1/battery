const initialState = {
    cardAlign: 1
}

const utile = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ALIGN":
            return {
                ...state,
                cardAlign: action.value,
            }

        default:
            return state
    }
}

export default utile;