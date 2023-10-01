import { FaSave } from "react-icons/fa";

const UpdateButton = ({type, onClick}) => {
    return <button type={type} className="preview-btn" onClick={onClick}>
            <FaSave />
            <span> Update</span>
        </button>
};

export default UpdateButton;