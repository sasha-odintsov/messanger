import Avatar from "../Avatar/Avatar";

const ChatHeader = ({ title, avatar }) => {
  return(
    <header className='chat__header wrapper-content'>
      <Avatar style={{ width: '50px' }} avatar={avatar} />
      <h2 className="chat__header_title">
        {title}
      </h2>
    </header>
  )
}

export default ChatHeader;