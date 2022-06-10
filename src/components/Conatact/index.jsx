import React from 'react'
import './style.scss'
import arrow from '../../assets/img/arrow.svg'

export default function Contact({btnName,svg,title1,title2,area,info1,info2,info3,info4}) {
  return (
    <div>
        <div className='title-wrapper'>
            <span className='inventInfoSpan'>
                <img className='svg' src={svg}></img>
            </span>
            <div className='title-content'>
                <small>{title1}</small>
                <h3>{title2}</h3>
            </div>
            <div className='title-body'>
                <span className='area'>{area}</span>
                <ul>
                    <li>{info1}</li>
                    <li>{info2}</li>
                    <li>{info3}</li>
                    <li>{info4}</li>
                </ul>
            </div>
           <div>
               <button className='custom-btn'>{btnName}</button>
           </div>
        </div>
    </div>
  )
}
