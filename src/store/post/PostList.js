import React from 'react'
import { useSelector } from 'react-redux'
import EventTitle from '../../components/EventTitle'
import { selectAllPosts } from './postSlice'
import { ReactionsButtons } from './ReactionsButtons'
import { TimeAgo } from './TimeAgo'
import Admin from '../../assets/img/admin.png'

const PostList=()=> {
    const posts=useSelector(selectAllPosts)
    console.log("🚀 ~ file: PostList.js ~ line 7 ~ PostList ~ posts", posts)
    
    
    const renderedPosts=posts.map(post=>(
        <article key={post.id}>
          <div>
          <img src={Admin}></img>
          </div>
           <div className='comment'>
           <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p>
              <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionsButtons post={post}/>
           </div>
            
        </article>
    ))
    console.log("🚀 ~ file: PostList.js ~ line 22 ~ PostList ~ renderedPosts", renderedPosts)

  return (
    <section>
        <EventTitle title2="Event" strongtitle='Reviews'/>
        {renderedPosts}
    </section>
  )
}
export default PostList
