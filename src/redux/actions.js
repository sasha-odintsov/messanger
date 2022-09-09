export function inputText(text, id) {
    return {
        type: 'INPUT_TEXT',
        payload: { text, id }
    }
}

export function messageDelete(id) {
    return {
        type: 'DELETE',
        payload: { id }
    }
}