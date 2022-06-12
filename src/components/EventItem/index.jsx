import React from 'react'
import svgLocation from '../../assets/img/location1.svg'
import svgClock from '../../assets/img/clock1.svg'
import './style.scss'
import { Link } from 'react-router-dom'

const EventItem=({title,poster,description,date,location})=>  (
  <div className='Wrapper'  >
    <div className='Position'>
    <div className='PostDate'>
      <span className='Date'>26</span>
      <small className='Month'>june</small>
    </div>
  <img className='Image' alt={`${title} Show Poster`} src={`${poster}`} >
    </img>
    </div>
  <div className='Container'>
   <h3 className='Title'>{title}</h3>
   <span className='Description'>{description}</span>
   <div className='UlLiBlock'>
   <ul className='Ul'>
     <li className='Li'>
        <img className='EventSvg' src={svgClock} alt=""/>
        ({date})</li>
     <li  className='Li'>
     <img className='EventSvg' src={svgLocation} alt=""/>
       {location}</li>
   </ul>
   </div>
   <nav>
     <Link to='eventDetails' className='Button'>Tickets & details</Link>
   </nav>
 </div>
</div>
)
export default EventItem