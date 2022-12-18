// import Chuck from '../images/ChuckNorris.jpg';

const initialState = {
    // chats: [
    //     {
    //      title: 'Chuck Norris',
    //      avatar: Chuck,
    //      messages: []
    //     },
    // ],
    messages: []
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
                    id: action.data.id,
                    date: action.date
                }]
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