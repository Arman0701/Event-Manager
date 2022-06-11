import style from './Timer.module.css';
import React from "react";

export default function Timer() {

	return (
		<div className={style.timerWrapper}>
			<div className={style.timerCell}>
				<span>00</span>
				<span>DAYS</span>
			</div>
			<div className={style.timerCell}>
				<span>00</span>
				<span>HOURS</span>
			</div>
			<div className={style.timerCell}>
				<span>00</span>
				<span>MINS</span>
			</div>
			<div className={style.timerCell}>
				<span>00</span>
				<span>SECS</span>
			</div>
		</div>
	)
}