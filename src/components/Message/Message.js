import { useDispatch } from "react-redux";
import { messageDelete } from "../../redux/actions";
import './Message.css'

const Message = ({ data }) => {
    const { text, id } = data;
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(messageDelete(id))
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className='message'>
            <p style={{marginRight: '10px'}} >
                {text}
            </p>
            <div onClick={handleDelete} style={{ color: 'red', cursor: 'pointer'}}>x</div>
        </div>
    )
}

export default Message;