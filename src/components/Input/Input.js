import './Input.scss';
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
        dispatch(inputText(message, id, 'send'))
        setTimeout(() => dispatch(messageLoad()), 2000)
        setMessage('')
    }
    return(
        <form onSubmit={handleSubmit} className='chat__form'>
            <div className="chat__inputs-wrap">
                <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className='chat__input'
                placeholder='Type your message'
                />
                <input type="submit" hidden disabled={!message}/>
                <input type="submit" value='' className='chat__input-btn' disabled={!message}/>
            </div>
        </form>
    )
}

export default Input;