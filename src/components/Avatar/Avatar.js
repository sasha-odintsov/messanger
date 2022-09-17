import './Avatar.scss'
import Chuck from '../../images/ChuckNorris.jpg'

const Avatar = ({ style }) => {
    return (
        <div className="avatar-wrap" style={style}>
            <img src={Chuck} alt="avatar" className="avatar"/>
        </div>
    )
}

export default Avatar;