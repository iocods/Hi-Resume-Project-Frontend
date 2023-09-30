import { FaSave } from "react-icons/fa";

const UpdateButton = ({onClick}) => {
    return <button className="preview-btn" onClick={onClick}>
            <FaSave />
            <span> Update</span>
        </button>
};

export default UpdateButton;