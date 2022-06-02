import React from 'react'
import Contact from '../Conatact'
import location from '../../assets/img/location.svg'
import './style.scss'

export default function Contacts() {
  return (
    <div className='location-wrapper'>
     <Contact
     svg={location}
     title1='event location'
     title2='vanila hotel'
     area='Yerevan, Armenia'
     info1='Bayezid II Mosque and Beyazid Square'
     info2='Istanbul, IS 240012'
     info3='Thursday, December 26, 2018'
     info4='From 15.00 PM to 20.00 PM (EST)'
     btnName='Add my calendar'
     />
    </div>
  )
}
