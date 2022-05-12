import React from 'react'
import event1 from '../../assets/img/event1.jpg'
import event2 from '../../assets/img/event-2.jpg'
import EventItem from '../EventItem'
import styled from 'styled-components';


export const EventItemsStyled=styled.div`
   display: flex;
   flex-wrap: wrap;
   margin-right: -15px;
   margin-left: -15px;
   padding:30px;
   gap:30px;
   justify-content: center;
   align-items: center;
   @media(max-width: 992px) {
    flex-direction: column
  }
 
`

export default function EventItems() {
  return (
    <EventItemsStyled>
       <EventItem  poster={event1} title="Barcelona Food Truck Festival 2018" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event2} title="Barcelona Food Truck Festival 2019" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event2} title="Barcelona Food Truck Festival 2019" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event1} title="Barcelona Food Truck Festival 2018" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event2} title="Barcelona Food Truck Festival 2019" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
       <EventItem  poster={event1} title="Barcelona Food Truck Festival 2018" description="Tickets from $52" date="Start 20:00pm - 22:00pm" location=" Manhattan, New York"/>
    </EventItemsStyled>
  )
}
