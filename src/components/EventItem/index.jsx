import React from 'react'
import svgLocation from '../../assets/img/location1.svg'
import svgClock from '../../assets/img/clock1.svg'
// import styled from 'styled-components';
import './style.scss'



// const EventItem=({title,poster,description,date,location})=>  (
//      <Wrapper >
//        <Position>
//        <PostDate>
//          <Date>26</Date>
//          <Month>june</Month>
//        </PostDate>
//      <Image alt={`${title} Show Poster`} src={`${poster}`} >
//        </Image>
//        </Position>
//      <Container>
//       <Title>{title}</Title>
//       <Description>{description}</Description>
//       <UlLiBlock>
//       <Ul>
//         <Li>
//            <EventSvg src={svgClock} alt=""/>
//            ({date})</Li>
//         <Li>
//         <EventSvg src={svgLocation} alt=""/>
//           {location}</Li>
//       </Ul>
//       </UlLiBlock>
//        <Button>Tickets & details</Button>
//     </Container>
//   </Wrapper>
//   )
// export default EventItem
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
    <button className='Button'>Tickets & details</button>
 </div>
</div>
)
export default EventItem