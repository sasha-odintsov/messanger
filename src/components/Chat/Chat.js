import { useSelector } from "react-redux";
import Input from "../Input/Input";
import Message from "../Message/Message";

const Chat = () => {
    const message = useSelector((state) => state.inputReducer.messages);
    return(
        <div style={{ width: '500px', margin: '20px auto', border: '1px solid #ccc', padding: '20px'}}>
            {!!message.length && message.map((message) => {
                return (
                    <Message key={message.id} data={message} />
                )
            })}
            <Input />
        </div>
    )
}

export default Chat;