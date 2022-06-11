import "./Carousel.css";
import { Carousel } from "3d-react-carousal";
import React from "react";

export default function Slider({ children }) {
	const slides = [...children]
    return <>
		<p className='carouselTitle'>
			UPCOMING EVENTS
		</p>
		<p className='corouselSubtitle'>
			Latest
			<span>Awsome Events</span>
		</p>
		<div className='carouselWrapper'>
			<Carousel slides={slides} autoplay={false} />
		</div>
	</>
}
