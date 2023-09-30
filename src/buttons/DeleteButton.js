import { FaTrash } from "react-icons/fa";

const DeleteButton = ({onClick}) => {
    return <button className="delete-btn" onClick={onClick}>
            <FaTrash />
            <span> Delete</span>
        </button>
};

export default DeleteButton;