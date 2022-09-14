export function inputText(text, id, type) {
    return {
        type: 'INPUT_TEXT',
        payload: { text, id, type }
    }
}

export function messageDelete(id) {
    return {
        type: 'DELETE',
        payload: { id }
    }
}

export function messageLoad() {
    return async function(dispatch) {
        const response = await fetch('https://api.chucknorris.io/jokes/random'); 
        const data = await response.json();
        dispatch({
            type: 'MESSAGE_LOAD',
            data
        }) 
    }
}