import React from 'react'
import EventDetails from '../../components/EventDetails'
import Footer from '../../components/Footer/Footer'
import Navbarelem from '../../components/navbarElements/Navbarelem'

export default function EventDetail() {
  return (
    <div>
        <Navbarelem/>
        <EventDetails/>
        <Footer/>
    </div>
  )
}
