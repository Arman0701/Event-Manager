import React from 'react'
import svgLocation from '../../assets/img/location1.svg'
import svgClock from '../../assets/img/clock1.svg'
import styled from 'styled-components';


const Wrapper = styled.div`
  width:42%;
  border: 2px solid #ffffff;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  &:hover {
  border: 2px solid  #ffc107;
    @media(max-width: 992px) {
      flex-direction: column
    }
`;

const Image = styled.img`
   float: left;
   width: 250px;
   height: 250px;
   overflow: hidden;
   display: flex;
   align-content: center;
   align-items: center;
   padding: 10px;
   margin-right: 30px;
`;
const Container=styled.div`
  display: table;
  padding: 10px 0px;
`;
const Button=styled.button`
    z-index: 1;
    font-weight: 600;
    overflow: hidden;
    padding: 15px 45px;
    border-radius: 30px;
    border: #ffc107;
    color: #878787;
    font-size: 14px;
    text-transform: uppercase;
    background: #f7f7f7;
    transition-duration: 0.4s;
    
    &:hover {
      color: #ffffff;
      background: -webkit-gradient(linear, left top, right bottom, from(#ff3e00), to(#ffbe30));
     }
    
    
`;
const PostDate=styled.div`
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 70px;
    height: 70px;
    padding: 10px;
    text-align: center;
     position :absolute;
    display: flex;
    align-content: stretch;
    justify-content: space-evenly;
    align-items: baseline;
    flex-wrap: nowrap;
    flex-direction: column;
    color: #ffffff;
    background: -webkit-gradient(linear, left top, right bottom, from(#ff3e00), to(#ffbe30));
`;
const Date=styled.span`
font-weight: 900;
font-size: 24px;
font-family: "Roboto", sans-serif;
`;
const Month=styled.small`
font-size: 16px;
text-transform: uppercase;
`;

const Title =styled.h3`
    margin: 0px;
    font-weight: 900;
    color: #333333;
    font-size: 18px;
    text-transform: capitalize;
    font-family: "Roboto", sans-serif;
}
`
const Description=styled.span`
color: #ffbe30;
`
const UlLiBlock=styled.div`
margin-bottom: 30px;
font-family: "Open Sans", sans-serif;

`
const Ul=styled.ul`
padding:0;
`
const Li=styled.li`
list-style: none;

`
const EventSvg=styled.img`
   width: 24px;
   height: 24px;
   line-height: 30px;
   margin-right: 10px;
   text-align: center;
   border-radius: 50%;
   color: #ffbe30;
   font-size: 14px;
   background-color: #f7f7f7;
   
`
const Position=styled.div`
position:relative;
`

const EventItem=({title,poster,description,date,location})=>  (
     <Wrapper >
       <Position>
       <PostDate>
         <Date>26</Date>
         <Month>june</Month>
       </PostDate>
     <Image alt={`${title} Show Poster`} src={`${poster}`} >
       </Image>
       </Position>
     <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <UlLiBlock>
      <Ul>
        <Li>
           <EventSvg src={svgClock} alt=""/>
           ({date})</Li>
        <Li>
        <EventSvg src={svgLocation} alt=""/>
          {location}</Li>
      </Ul>
      </UlLiBlock>
       <Button>Tickets & details</Button>
    </Container>
  </Wrapper>
  )
export default EventItem