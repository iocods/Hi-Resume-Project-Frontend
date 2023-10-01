import React, { useContext } from "react";
import { json, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaEye, FaPen, FaDownload } from "react-icons/fa";
import DownloadButton from "../buttons/DownloadButton";
import PreviewButton from "../buttons/PreviewButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import DataContext from "../context/DataContext";

const ItemList = ({item}) => {
  const{setEditResume, editResume} = useContext(DataContext);
  const Navigate = useNavigate();
  const editCurrentResume = () => {
    setEditResume({...editResume, ...item})
    Navigate('edit', {replace: true})
  }
  return <div className="resume-list">
    <div>
        <p>{item.title}</p>
        <div>
            <PreviewButton />
            <DownloadButton />
            <EditButton onClick={() => editCurrentResume()}/>
            <DeleteButton />
        </div>
    </div>
  </div>;
};

export default ItemList;
