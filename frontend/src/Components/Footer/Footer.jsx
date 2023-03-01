import React from 'react'
import "./footer.css"
function Footer(props) {
    const {isOpenPost,setOpen}=props
  return (
    <footer>
        <div className="footer-title" onClick={()=>setOpen(!isOpenPost)}>
            {isOpenPost?'x':'+'}
        </div>
    </footer>
  )
}

export default Footer