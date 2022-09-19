export function inputText(text, id, date, type) {
    return {
        type: 'INPUT_TEXT',
        payload: { text, id, date, type }
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
        let now = new Date().toLocaleString().slice(0,-3);
        dispatch({
            type: 'MESSAGE_LOAD',
            data,
            date: now
        }) 
    }
}