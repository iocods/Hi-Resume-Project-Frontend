import { FaDownload } from "react-icons/fa";

const DownloadButton = ({onClick}) => {
    return <button className="download-btn" onClick={onClick}>
        <FaDownload />
        <span> Download</span>
    </button>
};

export default DownloadButton;