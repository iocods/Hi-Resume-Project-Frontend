import React from "react";
import { FaEdit, FaTrash, FaEye, FaPen, FaDownload } from "react-icons/fa";
import DownloadButton from "../buttons/DownloadButton";
import PreviewButton from "../buttons/PreviewButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";

const ItemList = ({item}) => {
  return <div className="resume-list">
    <div>
        <p>{item.title}</p>
        <div>
            <PreviewButton />
            <DownloadButton />
            <EditButton />
            <DeleteButton />
        </div>
    </div>
  </div>;
};

export default ItemList;
