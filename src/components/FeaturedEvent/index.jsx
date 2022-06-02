import React,{useState,useEffect} from 'react'
import { images } from "./data";
import './style.scss'
import svgBookmark from '../../assets/img/bookmark.svg'
import clock from '../../assets/img/clock2.svg'
import location from '../../assets/img/location.svg'
import calendar from '../../assets/img/calendar.svg'
import EventInfo from '../EventInfo';
import EventTitle from '../EventTitle';

export default function FeaturedEvent() {
  const [count, setCount] = useState(0);
  const [mousedOver, setMousedOver] = useState(false);

  useEffect(() => {
 
    if (mousedOver) {
      const timer = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % images.length);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [mousedOver]);
  return (
    <div className='column'>
       <div className='event-details'>
         <EventTitle svgImg={svgBookmark} title1='Featured Event' title2='Istanbul' strongtitle='Wine Party 2018'/>
         <div className='event-details-carusel'>
           <div className='stage'>
           <div  className='flex-start'
           onMouseOver={() => setMousedOver(true)}
           onMouseOut={() => setMousedOver(false)}
          >
        <img  className='chaps' src={images[count].source} alt={images.name} />
       </div>
       <div className='event-info'>
         <ul>
         <EventInfo image={calendar} descrip1='Event date' descrip2='26 december 2018'/>
         <EventInfo image={clock} descrip1='Event Time' descrip2='15pm~22pm'/>
         <EventInfo image={location} descrip1='Event Location' descrip2='vanila hotel'/>  
         </ul>
       </div>
      <div>
     
      </div>
       <div className='PStyle'>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequatur. Vitae ducimus quae nostrum modi aut, cumque assumenda dolor, quod praesentium nulla aperiam, quia laudantium odio asperiores nemo iste eos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum consequatur odit rem porro voluptatibus esse laudantium. Distinctio possimus repudiandae velit, sunt optio animi libero facilis labore dolore temporibus quasi sint?
       </p>
       <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad provident aliquam culpa tenetur atque, temporibus vitae iste odio veniam, numquam, laudantium minus. Harum, aperiam! Accusamus illo alias deserunt libero quibusdam?
       </p>
       </div>
           </div>
         </div>
       </div>
    </div>
  )
}
