import { useDispatch } from "react-redux";
import { messageDelete } from "../../redux/actions";
import './Message.scss';

const Message = ({ data, style }) => {
    const { text, id } = data;
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(messageDelete(id))
    }
    return (
        <div >
            <p style={style} className='message'>
                {text}
            </p>
            <div onClick={handleDelete} style={{ color: 'red', cursor: 'pointer'}}>x</div>
        </div>
    )
}

export default Message;