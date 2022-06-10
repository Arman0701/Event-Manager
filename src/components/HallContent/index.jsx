import React from 'react'
import EventInfo from '../EventInfo'
import EventTitle from '../EventTitle'
import microphone from '../../assets/img/microphone.svg'

import './style.scss'

export default function HallContent({image,text,title,strongtitle}) {
  return (
    <>
     <div className='flex'>
         <div className='hall-image'>
             <img src={image}></img>
         </div>
         <div className='hall-content'>
             <EventTitle  title2={title} strongtitle={strongtitle}/>
             <p>
                 {text}
             </p>
             <div className='flex-evnt-info'>
                 <ul>
                     <EventInfo image={microphone} descrip1='speaker' descrip2='JENNY JUIS'/>
                     <EventInfo image={microphone} descrip1='speaker' descrip2='JENNY JUIS'/>
                     <EventInfo image={microphone} descrip1='speaker' descrip2='JENNY JUIS'/>
                 </ul>
             </div>
         </div>
         
     </div>
    </>
  )
}
