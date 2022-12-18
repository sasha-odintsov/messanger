import { useDispatch } from "react-redux";
import { messageDelete } from "../../redux/actions";
import './Message.scss';

const Message = ({ data, style, className }) => {
    const { text, id, date } = data;
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(messageDelete(id));

    return (
        <div className="message__wrap" style={style}>
            <div className="message__secondary-wrap">
                <p className={'message ' + className}>
                    {text}
                </p>
                <span className="message__date">
                    {date}
                </span>
            </div>
            <span onClick={handleDelete} className="message__btn">
                &#10799;
            </span>
        </div>
    )
}

export default Message;