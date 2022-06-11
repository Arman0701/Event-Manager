import "./leftbar.scss";
import { FaCalendarWeek } from "react-icons/fa";
import React from "react";

const Leftbar = () => {
  return (
    <div className="leftBar">
      <div className="calendar">
        <FaCalendarWeek /> <span>Add To Calendar</span>
      </div>
      <h2>Google Map Search</h2>

      <div className="imgConference">
        <div className="conferenceTitle">
          <h3>26 DECEMBER 2018</h3>
          <span className="city">AMSTERDAM </span>
          <span className="confText">PHP CONFERENCE</span>

          <div className="ticketBtn">
            <button>BOOKING TICKET</button>
          </div>
        </div>
        <img src="/assets/conference.jpg" alt="" />
      </div>
    </div>
  );
};

export default Leftbar;
