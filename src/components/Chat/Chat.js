import './Chat.scss';
import { useSelector } from "react-redux";
import Input from "../Input/Input";
import Message from "../Message/Message";

const Chat = () => {
    const message = useSelector((state) => state.inputReducer.messages);
    return(
        <>
        <div className='chat'>
            {!!message.length && message.map((message) => {
                return (
                    <Message key={message.id} data={message} style={
                        message.type === 'send' ? { backgroundColor: '#9fb0ff', color: '#fff' } : { backgroundColor: '#f0f0f0' } 
                    }/>
                )
            })}
            <Input />
        </div>
        </>
    )
}

export default Chat;