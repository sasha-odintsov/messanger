import { useDispatch } from "react-redux";
import { inputText } from '../../redux/actions';
import { useState } from "react";
import uniqid from 'uniqid';

const Input = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(inputText(message, id))
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <input type="submit" hidden/>
        </form>
    )
}

export default Input;