import React from 'react'
import { useSelector } from 'react-redux'
import "./post.css"

function Posts() {
  const post = useSelector((state)=>state.post.posts);
  const tags=["None","NSFW","Mood","Quotes","Shitpost"];
  return (
    <>
    <section className="post-container"> 
         {/* slice để bắt đầu từ phần tử 1 , chứ không hiện post initialState  */}
      {post.slice(1).map((post,idx)=>{
        return(
          <div className="posts" key={idx}>
            <p className="posts-title">{post.title}</p>
            <p className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</p>
            <p className="posts-description">{post.description}</p>
          </div>
        )
      })}
    </section>
    </>
  )
}

export default Posts