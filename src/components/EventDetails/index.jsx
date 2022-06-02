import React from 'react'
import EventPlans from '../EventPlans'
import EventLocation from '../EventLocation'
import EventReviews from '../EventReviews'
import EventSchedule from '../EventSchedule'
import FeaturedEvent from '../FeaturedEvent'
import './style.scss'
import EventAcardion from '../EventAcardion'
import Contacts from '../Contacts'
import CartContainer from '../CartContainer'

export default function EventDetails() {
  return (
    <>
       <div className='container'>
           <div className='row'>
               <div className='flex1'>
               <FeaturedEvent />
               <EventSchedule/>
               <EventPlans/>
               <CartContainer/>
               <EventReviews/>
               </div>
               <div className='flex2'>
                 <EventLocation/>
                 <Contacts/>
                 <EventAcardion/>
                 </div>
           </div>
       </div>
    </>
  )
}
