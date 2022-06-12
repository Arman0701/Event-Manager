import React from "react";
import Navbarelem from "../../components/navbarElements/Navbarelem";
import Footer from '../../components/Footer/Footer';
import './AboutUs.css'
import companyBanner from '../../assets/img/company-banner.png';
import arrowImage from '../../assets/img/angle-circle-up.svg';
import boxIcon1 from '../../assets/img/handshake.svg'
import boxIcon2 from '../../assets/img/glass-cheers.svg'
import boxIcon3 from '../../assets/img/balloons.svg'
import boxIcon4 from '../../assets/img/comment-heart.svg'
import boxIcon5 from '../../assets/img/hat-birthday.svg'
import boxIcon6 from '../../assets/img/bulb.svg'
import boxIcon7 from '../../assets/img/calendar-clock.svg'
import boxIcon8 from '../../assets/img/users-alt.svg'

const About = () => {
    return <>
		<Navbarelem />
		<div className="aboutContent">
			<div className="parallaxBg">
				<div className="darkCover">
					<div className="coverContent">
						<p>ALL YOU NEED TO KNOW</p>
						<p>
							<span>ABOUT</span> HARMONI
						</p>
						<div className="links">
							<a href="/">Home</a>
							<a href="#">About Us</a>
						</div>
					</div>
				</div>
			</div>
			<div className="section1">
				<div className="column1">
					<p>WE ARE HARMONI</p>
					<p>
						<span>No. 1</span>Events
					</p>
					<p>Management</p>
					<div className="buttonSec1">
						GET STARTED!
					</div>
				</div>
				<div className="column2">
					<div className="columnTitleContainer">
						<span>Our Mission</span>
						<div className="designLine"></div>
					</div>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis, modi pariatur nesciunt natus, iste ut explicabo ullam accusantium repellendus nisi totam iusto harum perspiciatis veniam, neque perferendis commodi cumque?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio facilis error dolor quia, ad impedit totam mollitia ea odit?</p>
				</div>
				<div className="column2">
					<div className="columnTitleContainer">
						<span>Our Vission</span>
						<div className="designLine"></div>
					</div>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda nobis, modi pariatur nesciunt natus, iste ut explicabo ullam accusantium repellendus nisi totam iusto harum perspiciatis veniam, neque perferendis commodi cumque?</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione optio facilis error dolor quia, ad impedit totam mollitia ea odit?</p>
				</div>
			</div>
			<div className="section2">
				<div className="imageWrapper">
					<img src={companyBanner} alt="banner" />
				</div>
				<div className="content">
					<p className="title">
						HARMONI AWAED
					</p>
					<p className="subtitle">
						Our Winning <span>Awards</span>
					</p>
					<div className="timeline">
						<div className="time">
							<div className="arrowUp">
								<img src={arrowImage} alt="arrow" />
							</div>
							<div className="verticalLine"></div>
							<div className="arrowDown">
								<img src={arrowImage} alt="arrow" />
							</div>
						</div>
						<div className="timelineContent">
							<div className="contentItem">
								<div className="contentTitle">
									<div className="dateWrapper">
										<p className="date">AUG 2015</p>
										<div className="round"></div>
									</div>
									<p className="titleText">1st Place For Unique Events 2018</p>
								</div>
								<div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</div>
							</div>
							<div className="contentItem">
								<div className="contentTitle">
									<div className="dateWrapper">
										<p className="date">AUG 2015</p>
										<div className="round"></div>
									</div>
									<p className="titleText">1st Place For Unique Events 2018</p>
								</div>
								<div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</div>
							</div>
							<div className="contentItem">
								<div className="contentTitle">
									<div className="dateWrapper">
										<p className="date">AUG 2015</p>
										<div className="round"></div>
									</div>
									<p className="titleText">1st Place For Unique Events 2018</p>
								</div>
								<div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</div>
							</div>
							<div className="contentItem">
								<div className="contentTitle">
									<div className="dateWrapper">
										<p className="date">AUG 2015</p>
										<div className="round"></div>
									</div>
									<p className="titleText">1st Place For Unique Events 2018</p>
								</div>
								<div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</div>
							</div>
							<div className="contentItem">
								<div className="contentTitle">
									<div className="dateWrapper">
										<p className="date">AUG 2015</p>
										<div className="round"></div>
									</div>
									<p className="titleText">1st Place For Unique Events 2018</p>
								</div>
								<div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</div>
							</div>
							<div className="contentItem">
								<div className="contentTitle">
									<div className="dateWrapper">
										<p className="date">AUG 2015</p>
										<div className="round"></div>
									</div>
									<p className="titleText">1st Place For Unique Events 2018</p>
								</div>
								<div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</div>
							</div>
							<div className="contentItem">
								<div className="contentTitle">
									<div className="dateWrapper">
										<p className="date">AUG 2015</p>
										<div className="round"></div>
									</div>
									<p className="titleText">1st Place For Unique Events 2018</p>
								</div>
								<div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</div>
							</div>
							<div className="contentItem">
								<div className="contentTitle">
									<div className="dateWrapper">
										<p className="date">AUG 2015</p>
										<div className="round"></div>
									</div>
									<p className="titleText">1st Place For Unique Events 2018</p>
								</div>
								<div className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit diam sed diam nonummy nibh euismod tincidunt.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="section3">
				<p className="section3Title">WHY CHOOSE US</p>
				<div className="section3Box">
					<p>
						HARMONI <span className="strong">Advantages</span>
					</p>
					<div className="section2Button">MEET THE TEAM</div>
				</div>
				<div className="sectionContentWrapper">
					<div className="sectionContentBox">
						<div className="boxContent">
							<div className="iconWrapper">
								<img src={boxIcon1} alt="icon" />
							</div>
							<p className="boxTitle">Friendly Team</p>
							<p className="boxSubtitle">More than 200 teams</p>
						</div>
					</div>
					<div className="sectionContentBox">
						<div className="boxContent">
							<div className="iconWrapper">
								<img src={boxIcon2} alt="icon" />
							</div>
							<p className="boxTitle">Unique Scenario</p>
							<p className="boxSubtitle">we thinking out of the box</p>
						</div>
					</div>
					<div className="sectionContentBox">
						<div className="boxContent">
							<div className="iconWrapper">
								<img src={boxIcon3} alt="icon" />
							</div>
							<p className="boxTitle">perfect venues</p>
							<p className="boxSubtitle">perfect venues</p>
						</div>
					</div>
					<div className="sectionContentBox">
						<div className="boxContent">
							<div className="iconWrapper">
								<img src={boxIcon4} alt="icon" />
							</div>
							<p className="boxTitle">24/7 hours support</p>
							<p className="boxSubtitle">anitime anywhere</p>
						</div>
					</div>
					<div className="sectionContentBox">
						<div className="boxContent">
							<div className="iconWrapper">
								<img src={boxIcon5} alt="icon" />
							</div>
							<p className="boxTitle">Unforgetable Times</p>
							<p className="boxSubtitle">More than 200 teams</p>
						</div>
					</div>
					<div className="sectionContentBox">
						<div className="boxContent">
							<div className="iconWrapper">
								<img src={boxIcon6} alt="icon" />
							</div>
							<p className="boxTitle">Briliant Idea</p>
							<p className="boxSubtitle">We thinking out of the box</p>
						</div>
					</div>
					<div className="sectionContentBox">
						<div className="boxContent">
							<div className="iconWrapper">
								<img src={boxIcon7} alt="icon" />
							</div>
							<p className="boxTitle">Unique Scenario</p>
							<p className="boxSubtitle">perfact venues</p>
						</div>
					</div>
					<div className="sectionContentBox">
						<div className="boxContent">
							<div className="iconWrapper">
								<img src={boxIcon8} alt="icon" />
							</div>
							<p className="boxTitle">Best Management</p>
							<p className="boxSubtitle">Inevitable TEAM </p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</>
};

export default About;
