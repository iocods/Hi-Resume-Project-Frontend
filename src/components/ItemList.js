import React, { useContext } from "react";
import { json, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaEye, FaPen, FaDownload } from "react-icons/fa";
import DownloadButton from "../buttons/DownloadButton";
import PreviewButton from "../buttons/PreviewButton";
import EditButton from "../buttons/EditButton";
import DeleteButton from "../buttons/DeleteButton";
import DataContext from "../context/DataContext";

const ItemList = ({item}) => {
  const{setEditResume} = useContext(DataContext);
  const Navigate = useNavigate();
  const editResume = () => {
    console.log(JSON.stringify(item))
    setEditResume(item);
    setTimeout( () => {
      Navigate('edit', {replace: true})
      }, 3000);
  }
  return <div className="resume-list">
    <div>
        <p>{item.title}</p>
        <div>
            <PreviewButton />
            <DownloadButton />
            <EditButton onClick={() => editResume()}/>
            <DeleteButton />
        </div>
    </div>
  </div>;
};

export default ItemList;
