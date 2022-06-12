import "./event.scss";
import { Link } from "react-router-dom";
import EventSearch from "./EventSearch";
import Section from "./sectionEvent/Section";
import React from "react";

const Event = () => {

 

  return (
    <>
      <div className="img-container">
        <div className="titleDiv">
          <span>HARMONI EVENTS</span>
          <h2>
            HARMONI <span>EVENT</span>
          </h2>

          <div className="navHome">
            <span className="spanHome">
              <Link style={{ textDecoration: "none" }} to="/">
                <span className="spanHome"> Home </span>
              </Link>
            </span>
            <hr />
            <span>Event Listing</span>
          </div>
        </div>
        <img src="/assets/mountain.jpg" alt="" className="img" />
      </div>

      <EventSearch />
      <Section />
    </>
  );
};

export default Event;
