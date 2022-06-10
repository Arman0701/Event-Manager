import React from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="background-container">
        <img
          src="https://images.squarespace-cdn.com/content/v1/51eace6ae4b0161a067e011b/1543324493289-BFRCAKZS9HQV5M819O4T/Stratford-Country-Club-Gazebo-Ceremony-Site"
          alt=""
        />
      </div>

      <div className="upcoming-events">
        <h4>Upcoming Events</h4>
      </div>
    </div>
  );
};

export default Home;
