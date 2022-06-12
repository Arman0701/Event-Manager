import './Cover.css';
import React from "react";

export default function Cover() {

	return (
		<div className='cover'>
			<p className="title">One Stop</p>
			<p className="subTitle">Event Planner</p>
			<p className="slogan">EVERY EVENT SHOULD BE PERFECT</p>
			<div className="buttons">
				<div className="button">ABOUT US</div>
				<div className="button">GET STARTED</div>
			</div>
		</div>
	)
}