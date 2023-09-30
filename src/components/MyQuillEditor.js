import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';

const MyQuillEditor = ({value, onChange}) => {
    return <ReactQuill name="description" value={value} theme='snow' onChange={onChange}/>
 };
  
  export default MyQuillEditor;
  