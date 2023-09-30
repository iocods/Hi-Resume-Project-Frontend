import { FaEye } from "react-icons/fa";

const PreviewButton = ({onClick}) => {
    return <button className="preview-btn" onClick={onClick}>
            <FaEye />
            <span> Preview</span>
        </button>
};

export default PreviewButton;