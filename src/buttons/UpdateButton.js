import { FaSave } from "react-icons/fa";

const UpdateButton = ({type, onClick, text}) => {
    return <button type={type} className="preview-btn" onClick={onClick}>
            <FaSave />
            <span> Update {text}</span>
        </button>
};

export default UpdateButton;