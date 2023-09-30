import { FaEdit } from "react-icons/fa";

const EditButton = ({onClick}) => {
    return <button className="edit-btn" onClick={onClick}>
            <FaEdit />
            <span> Edit</span>
        </button>
};

export default EditButton;