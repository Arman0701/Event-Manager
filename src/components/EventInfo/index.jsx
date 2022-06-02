import React from 'react'
import './style.scss'

// eslint-disable-next-line react/prop-types
export default function EventInfo({image,descrip1,descrip2}) {
  return (
    <>
      <li className='eventInfoLi'>
             <span className='inventInfoSpan'>
               <img src={image}></img>
             </span>
             <div className='event-content'>
               <small>{descrip1}</small>
               <h3>{descrip2}</h3>
             </div>
           </li>
    </>
  )
}
