import { useSelector } from "react-redux";
import Input from "../Input/Input";
import Message from "../Message/Message";

const Chat = () => {
    const message = useSelector((state) => state.inputReducer.messages);
    // const answer = useSelector((state) => state.inputReducer.answers);
    return(
        <>
        <div 
        style=
        {{ 
        width: '500px', 
        margin: '20px auto', 
        border: '1px solid #ccc', 
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        ':nthChild(2n)': { alignItems: 'start'}    
        }}
        >
            {!!message.length && message.map((message) => {
                return (
                    <Message key={message.id} data={message} />
                )
            })}
            {/* {!!answer.length && answer.map((answer) => {
                return (
                    <Message key={answer.id} data={answer} />
                )
            })} */}
            <Input />
        </div>
        </>
    )
}

export default Chat;