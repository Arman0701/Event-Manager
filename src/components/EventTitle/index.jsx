import React from 'react'
import './style.scss'

export default function EventTitle({svgImg,title1,title2,strongtitle}) {
  return (
    <div className='event-title'>
    <span className='tag-item'>
      <img className='bookmark' src={svgImg}></img>
      {title1}
    </span>
    <h2 className='evt-title'>
      {title2}
      <strong >{strongtitle}</strong>
    </h2>
  </div>
  )
}