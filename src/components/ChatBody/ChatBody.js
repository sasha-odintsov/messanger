import { useRef, useEffect } from 'react';
import Message from "../Message/Message";

const ChatBody = ({ message }) => {
  const scroll = useRef(null);
  useEffect(() => {
    scroll.current.scrollIntoView();
  }, [message]);

  return(
    <div className='chat__content-wrap'>
      <div className="chat__content wrapper-content">
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
  )
}

export default ChatBody;