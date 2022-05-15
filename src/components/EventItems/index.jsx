import React from 'react'
import event1 from '../../assets/img/event1.jpg'
import event2 from '../../assets/img/event-2.jpg'
import EventItem from '../EventItem'
import './style.scss'



export default function EventItems() {
  return (
    <>
    <div className='column'>
      <div className='section'>
        <span className='LineStyle'></span>
        <small className='sub-title'>harmoni events</small>
        <h2 className='big-title'>
          <strong className='EvStrong'>event</strong>
            Listing
        </h2>
      </div>
    </div>
    <div className='EventItemsStyled'>
       <EventItem  poster={event1} title="Barcelona Food Truck Festival 2018" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event2} title="Barcelona Food Truck Festival 2019" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event2} title="Barcelona Food Truck Festival 2019" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event1} title="Barcelona Food Truck Festival 2018" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event2} title="Barcelona Food Truck Festival 2019" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event1} title="Barcelona Food Truck Festival 2018" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
    </div>
    </>
  )
}
