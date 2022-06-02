import React, { useState } from 'react'
import { postAdded } from './postSlice';
import { useDispatch } from 'react-redux';
import EventTitle from '../../components/EventTitle';


export default function AddPostForm() {
  const dispatch=useDispatch();

  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  
  
  const onTitleChanged=e=>setTitle(e.target.value);
  const onContentChanged=e=>setContent(e.target.value);
  

  const onSavePostClicked=()=>{
      if(title && content){
          dispatch(
              postAdded(title,content)
          )
          setTitle('')
          setContent('')
      }
  }
  const canSave=Boolean(title) && Boolean(content) ;

 

  return (
    <section>
        <EventTitle title2='Write a ' strongtitle='comment'/>
        <form>
            <label htmlFor='postTitle'>Name</label>
            <input
              type='text'
              id='postTitle'
              name='postTitle'
              value={title}
              onChange={onTitleChanged}
            ></input>
              <label htmlFor='postContent'> Comment</label>
              <textarea
              id='postContent'
              name='postContent'
              value={content}
              className='inputComment'
              onChange={onContentChanged}
            ></textarea>
            <div className='flex-centre'>
            <button
              type='button'
              onClick={onSavePostClicked}
              disabled={!canSave}
            >Save post</button>
            </div>
           </form>
    </section>
  )
}
