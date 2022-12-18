import './Avatar.scss';

const Avatar = ({ style, avatar }) => {
    return (
        <div className="avatar-wrap" style={style}>
            <img src={avatar} alt="avatar" className="avatar"/>
        </div>
    )
}

export default Avatar;