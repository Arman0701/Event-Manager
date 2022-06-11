import style from './Content.module.css';
import clockIcon from './icons/clock-solid.svg';
import locationIcon from './icons/location-dot-solid.svg';
import React from "react";

export default function Content() {
	return (	
		<div className={style.contentWrapper}>
			<div className={style.date}>
				<span>26</span>
				<span>JUNE</span>
			</div>
			<p className={style.contentTitle}>
				<span>The Governors music Festival 2019</span>
				<span>Tickets from 52$</span>
			</p>
			<div className={style.datas}>
				<div className={style.data}>
					<div className={style.dataIconWrapper}>
						<img src={clockIcon} alt="icon" />
					</div>
					<p className={style.dataLabel}>
						Start 20:00pm - 22:00pm 
					</p>
				</div>
				<div className={style.data}>
					<div className={style.dataIconWrapper}>
						<img src={locationIcon} alt="icon" />
					</div>
					<p className={style.dataLabel}>
						Manhattan, New York
					</p>
				</div>
			</div>

			<div className={style.ticketBtn}>
				TICKETS AND DETAILS
			</div>
		</div>
	)
}	