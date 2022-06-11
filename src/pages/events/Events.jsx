import React from 'react'
import Event from '../../components/event/Event';
import Navbarelem from './../../components/navbarElements/Navbarelem';
import "./events.scss"
// import useFetch from './../../hooks/useFetch';

const Events = () => {



   

  return (
    <div>
      <Navbarelem/>
      <div className='imgContainer' >

        <Event/>
      </div>
   
    
    </div>
  )
}

export default Events