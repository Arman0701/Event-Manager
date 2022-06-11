import "./eventSearch.scss";
import React from "react";

const EventSearch = () => {
  return (
    <div className="eventSearch">
      <div className="backgroundSearch">
        <div className="section">
          <div className="divSecTitle">
            <span>FIND BEST EVENT ON HARMONI</span>
            <h2>
              Event <strong> Search</strong>
            </h2>
          </div>

          <div className="col">
            <div className="li">
              <span className="title">EVENT KEYWORD</span>
              <div className="for-item">
                <input type="text" placeholder="Event name, location, etc." />
              </div>
            </div>
            <div className="li">
              <span className="title">EVENT CATEGORY</span>
              <div className="for-select">
                <select name="" id="event-category-select">
                  <option selected>Conference</option>
                  <option value="1">film1</option>
                  <option value="2">film2</option>
                  <option value="3">film3</option>
                </select>
              </div>
            </div>

            <div className="li">  
              <button className="for-btn">SEARCH EVENT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSearch;
