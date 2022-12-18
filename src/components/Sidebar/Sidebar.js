import './Sidebar.scss';
import { Link } from "react-router-dom";
import Avatar from '../Avatar/Avatar';
import { useSelector } from "react-redux";
import logo from '../../images/send.png';
import { chats } from '../../data/data';

const Sidebar = () => {
    const messages = useSelector((state) => state.inputReducer.messages);
    const lastMessage = messages.length ? messages[messages.length - 1] : '';
    return (
        <div className="sidebar">
            <Link to="/" className="sidebar__title">Messanger</Link>
            <Link to="/" className="sidebar__title sidebar__logo-wrap">
                <img src={logo} alt="logo" className="sidebar__logo"/>
            </Link>
            <nav className="sidebar__navigation">
                <ul className="sidebar__navigation_list">
                    <li className="sidebar__navigation_item">
                        {chats.map(chat => {
                            return(
                                <Link key={chat.title} to="/chat" className="sidebar__navigation_link">
                                    <Avatar avatar={chat.avatar}/>
                                    <div className="navigation_link-dialog-wrap">
                                        <div className="navigation_link-dialog-title">
                                            <span className="link-dialog-title_name">{chat.title}</span>
                                            <span className="link-dialog-title_time">{lastMessage && lastMessage.date.slice(0, 10)}</span>
                                        </div>
                                        <p className="navigation_link-dialog-subtitle">
                                            {lastMessage.text}
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}
                    </li >
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;