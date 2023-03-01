import React from 'react'
import "../Edit/edit.css"
import "../Posts/post.css"

function Input(props) {
  const {inputType,classStyle,data,setData,label} = props
  return (
    <>
      <label>{label}</label>
      {inputType==="textarea"? (
        <textarea type="text" className={classStyle} placeholder={data} onChange={(e)=>setData(e.target.value)}/>
      ):(
        <input type="text" placeholder={data} onChange={(e)=>setData(e.target.value)}></input>
      )}
      
    </>
  )
}

export default Input