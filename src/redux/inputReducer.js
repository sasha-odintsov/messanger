const initialState = {
    messages: []
}

const inputReducer = (state = initialState, action) => {
    console.log('action >>> ', action)
    switch (action.type) {
        case 'INPUT_TEXT':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'DELETE':
            return {
                ...state,
                messages: state.messages.filter((messages) => messages.id !== action.payload.id)
            }
            
        default:
            return state
    }
}

export default inputReducer;