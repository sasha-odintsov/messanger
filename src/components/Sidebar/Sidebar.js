import './Sidebar.scss';
import { Link } from "react-router-dom";
import Avatar from '../Avatar/Avatar';
// import Chuck from '../../images/ChuckNorris.jpg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to="/" className="sidebar__title ">Messanger</Link>
            <nav className="sidebar__navigation">
                <ul className="sidebar__navigation_list">
                    <li className="sidebar__navigation_item">
                        <Link to="/chat" className="sidebar__navigation_link">
                            <Avatar />
                            <div className="navigation_link-dialog-wrap">
                                <div className="navigation_link-dialog-title">
                                    <span className="link-dialog-title_name">Chuck Norris</span>
                                    <span className="link-dialog-title_time">14.09.22 14:40</span>
                                </div>
                                <p className="navigation_link-dialog-subtitle">
                                    Fighting bulls see a red cape and charge towards it
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