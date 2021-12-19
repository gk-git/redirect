import React, { useEffect, useRef, useState } from 'react'

import './FileUpload.scss'

export default function FileUpload ({ label }) {
  const input = useRef()
  const removeFileUpload = useRef()
  const [state, setState] = useState({
    file: null,
    fileName: null,
  })
  
  useEffect(() => {
    
    const handleFileChange = (event) => {
      if (event.target.files.length > 0) {
        setState({
          ...state,
          file: event.target.files[0],
          fileName: event.target.files[0].name,
        })
      } else {
        setState({
          ...state,
          file: null,
          fileName: null,
        })
      }
    }
    if (input && input.current) {
      input.current.addEventListener('change', handleFileChange, false)
      
      return () => {
        input.current.removeEventListener('change', handleFileChange, false)
      }
    }
  }, [input])
  
  useEffect(() => {
    const handleRemoveFile = (event) => {
      event.preventDefault()
      
      setState({
        ...state,
        file: null,
        fileName: null,
      })
    }
    if (removeFileUpload && removeFileUpload.current) {
      removeFileUpload.current.addEventListener('click', handleRemoveFile, false)
      
      return () => {
        removeFileUpload.current.removeEventListener('click', handleRemoveFile, false)
      }
    }
  }, [removeFileUpload])
  
  return (
   <div className="file-upload">
     <label htmlFor="upload-btn" >
       <span>{
         state.file !== null ? (
           state.fileName
         ) : label
       }</span>
       <input ref={input} type="file" id="upload-btn"/>
     </label>
     <span className="file-upload__remove" style={{display: state.file ? 'block': 'none'}} ref={removeFileUpload}>x</span>
   </div>
  )
}
