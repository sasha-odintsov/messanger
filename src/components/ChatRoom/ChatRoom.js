import ChatHeader from "../ChatHeader/ChatHeader";
// import Chuck from '../../images/ChuckNorris.jpg';
import ChatBody from "../ChatBody/ChatBody";
import Input from "../Input/Input";
import { useSelector } from "react-redux";
import { chats } from "../../data/data";

const ChatRoom = () => {
  const message = useSelector((state) => state.inputReducer.messages);

  return(
    <div className='chat'>
      {chats.map(chat => {
        return(
          <ChatHeader 
            key={chat.title}
            title={chat.title}
            avatar={chat.avatar}
          />
        )
      })}
      <ChatBody message={message}/>
      <Input />
    </div>
  )
}

export default ChatRoom;