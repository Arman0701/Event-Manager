import React from 'react';
import Event from '../../components/event/Event';
import Navbarelem from './../../components/navbarElements/Navbarelem';
import "./events.scss";
import Footer from "../../components/Footer/Footer";
// import useFetch from './../../hooks/useFetch';

const Events = () => {



   

  return (
    <div>
      <Navbarelem/>
      <div className='imgContainer' >

        <Event/>
      </div>
   
      <Footer marginTop={"0px"} />
    </div>
  )
}

export default Events