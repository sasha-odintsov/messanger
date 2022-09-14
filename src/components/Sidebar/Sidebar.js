import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <a href="/" className="sidebar__title">Chats</a>
            <nav className="sidebar__navigation">
                <ul>
                    <li>
                        <Link to="/chat">Chuck Norris</Link>
                    </li >
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;