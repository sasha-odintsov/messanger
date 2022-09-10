import { useDispatch } from "react-redux";
import { inputText, messageLoad } from '../../redux/actions';
import { useState } from "react";
import uniqid from 'uniqid';

const Input = () => {
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(inputText(message, id))
        setTimeout(() => dispatch(messageLoad()), 2000)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <input type="submit" hidden/>
            <input type="submit" value='Send'/>
        </form>
    )
}

export default Input;