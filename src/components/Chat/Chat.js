import './Chat.scss';
import { useSelector } from "react-redux";
import { useRef, useEffect } from 'react';
import Input from "../Input/Input";
import Message from "../Message/Message";
import Avatar from '../Avatar/Avatar';
// import Chuck from '../../images/ChuckNorris.jpg'

const Chat = () => {
    const message = useSelector((state) => state.inputReducer.messages);
    const scroll = useRef(null);
    useEffect(() => {
        scroll.current.scrollIntoView();
    }, [message]);
    
    return(
        <div className='chat'>
            <header className='chat__header'>
                <Avatar style={{ width: '50px' }}/>
                <h2 className="chat__header_title">
                    Chuck Norris
                </h2>
            </header>
            <div className='chat__content-wrap'>
                <div className="chat__content">
                    {!!message.length && message.map((message) => {
                        return (
                            <Message 
                            key={message.id} 
                            data={message} 
                            className={
                                message.type === 'send' ? 'message-send' : '' 
                            }
                            style={ message.type === 'send' ? { marginLeft: 'auto' } : { marginRight: 'auto' } }
                            />
                        )
                    })}
                    <span ref={scroll}></span>
                </div >
            </div>
            <Input />
        </div>
    )
}

export default Chat;