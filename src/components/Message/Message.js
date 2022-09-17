import { useDispatch } from "react-redux";
import { messageDelete } from "../../redux/actions";
import './Message.scss';

const Message = ({ data, style, className }) => {
    const { text, id } = data;
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(messageDelete(id))
    }
    return (
        <div className='message__wrap' style={style}>
            <p className={'message ' + className}>
                {text}
            </p>
            <div onClick={handleDelete} className='message__btn'>
                &#10799;
            </div>
        </div>
    )
}

export default Message;