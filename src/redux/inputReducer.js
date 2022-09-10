const initialState = {
    messages: [],
    // answers: []
}

const inputReducer = (state = initialState, action) => {
    console.log('action >>> ', action.data)
    switch (action.type) {
        case 'INPUT_TEXT':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'MESSAGE_LOAD':
            return {
                ...state,
                messages: [...state.messages, {
                    text: action.data.value,
                    id: action.data.id
                }]
                // answers: [...state.answers, {
                //     text: action.data.value,
                //     id: action.data.id
                // }]
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