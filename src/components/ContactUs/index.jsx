import React from 'react'
import EventTitle from '../EventTitle'
import './style.scss'

export default function ContactUs() {
  return (
    <div className='contact'>
        <div className='cntTitle'>
        <small className='cntSmall'>contact us</small>
     <EventTitle title2='Keep In Touch'  strongtitle=' With Harmoni'/>
        </div>
       
      <div className='contactContainer'>
          <div>
          <div className='itemInp'>
          <input placeholder='your name'></input>
          </div>
          <div className='itemInp'>
          <input placeholder='email address'></input>
          </div>
          </div>
         <div>
         <div className='itemInp'>
          <input placeholder='your country'></input>
          </div>
          <div className='itemInp'>
          <input placeholder='phone number'></input>
          </div>
         </div>
      </div>
      <div className='txtContainer'>
      <textarea placeholder='your message'></textarea>
      <button className='contactBut'>send mail</button>
      </div>
      
    </div>
  )
}
