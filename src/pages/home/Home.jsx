import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/Carousel/Slider";
import SliderSecond from '../../components/CarouselSecond/Carousel'
import image1 from '../../assets/img/event-1.jpg'
import image2 from '../../assets/img/event-2.jpg'
import image3 from '../../assets/img/event-3.jpg'
import Content from '../../components/Content/Content';
import Timer from "../../components/Timer/Timer";
import Cover from "../../components/Cover/Cover";
import bg1 from "../../assets/img/slider-bg1.jpg";
import bg2 from "../../assets/img/slider-bg2.jpg";
import bg3 from "../../assets/img/slider-bg3.jpg";
import Footer from "../../components/Footer/Footer"

const WRAPPER_STYLES = {
	width: '75vw',
	height: '60vh',
	overflow: 'hidden',
	position: 'relative',
}

const Home = () => {
  return (
    <div>
		<Navbar />
		<Slider interval={3000} coverContent={<Cover />}>
			<img src={bg1} alt='background'/>
			<img src={bg2} alt='background'/>
			<img src={bg3} alt='background'/>
		</Slider>
		<SliderSecond >
			<div style={WRAPPER_STYLES}>
				<Timer />
				<img src={image1} alt="background" style={{ width: '100%', height: '100%' }}/>
				<Content />
			</div>
			<div style={WRAPPER_STYLES}>
				<Timer />
				<img src={image2} alt="background" style={{ width: '100%', height: '100%' }}/>
				<Content />
			</div>
			<div style={WRAPPER_STYLES}>
				<Timer />
				<img src={image3} alt="background" style={{ width: '100%', height: '100%' }}/>
				<Content />
			</div>
		</SliderSecond>
		<Footer />
    </div>
  );
};

export default Home;
