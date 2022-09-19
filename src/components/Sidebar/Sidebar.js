import './Sidebar.scss';
import { Link } from "react-router-dom";
import Avatar from '../Avatar/Avatar';
import { useSelector } from "react-redux";
import logo from '../../images/send.png'

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
                        <Link to="/chat" className="sidebar__navigation_link">
                            <Avatar />
                            <div className="navigation_link-dialog-wrap">
                                <div className="navigation_link-dialog-title">
                                    <span className="link-dialog-title_name">Chuck Norris</span>
                                    <span className="link-dialog-title_time">{lastMessage && lastMessage.date.slice(0, 10)}</span>
                                </div>
                                <p className="navigation_link-dialog-subtitle">
                                    {lastMessage.text}
                                </p>
                            </div>
                        </Link>
                    </li >
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;