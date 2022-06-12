import React from 'react'
import { useState } from 'react';
import EventTitle from '../EventTitle'
import './style.scss'


const FORM_ENDPOINT = "";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md"> We&apos;ll be in touch soon.</div>
      </>
    );
  }
  return (
    <div className='contact'>
        <div className='cntTitle'>
        <small className='cntSmall'>contact us</small>
     <EventTitle title2='Keep In Touch'  strongtitle=' With Harmoni'/>
        </div>
       <form
       action={FORM_ENDPOINT}
       onSubmit={handleSubmit}
       method="POST"
       target="_blank"
       >
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
       </form>
    
      
    </div>
  )
}
