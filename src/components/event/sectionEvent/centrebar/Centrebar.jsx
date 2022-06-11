import React from "react";
import "./centrebar.scss";
import { FaMicrophone, FaThList, FaTicketAlt } from "react-icons/fa";
import { MdTableChart } from "react-icons/md";

const Centrebar = () => {
  return (
    <div className="centreBar">
      <div className="centreHeader">
        <div className="centreSelect">
          <span>5 Search results from 20 events</span>
          <span className="year">Years:</span>
          <select name="" id="event-category-select">
            <option selected>2019</option>

            <option value="1">2018</option>
            <option value="2">2019</option>
            <option value="3">2020</option>
          </select>
          <span className="month">Months:</span>
          <select name="" id="event-category-select">
            <option selected>June</option>

            <option value="1">July</option>
            <option value="2">Ogt</option>
            <option value="3">Sep</option>
          </select>
        </div>

        <div className="icons">
          <span>
            <FaThList />
          </span>
          <span className="md">
            <MdTableChart />
          </span>
        </div>
      </div>

      <div className="centreEvents">
        <div className="centreEv">
          <div className="centreEventImg">
            <div className="cornerItem">
              <span className="numMonth">26</span>
              <small className="month">June</small>
            </div>
            <hr />
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/event/event-1.jpg"
              alt=""
            />
          </div>
          <div className="centreEventInfo">
            <h2 className="title">Barcelona Food Truck Festival 2018</h2>
            <small className="price">Tickets from $52</small>
            <p className="desc">
              Lorem ipsum dollor site amet the best consectuer diam nerdistin
              adipiscing elites sed diam nonummy nibh the ebest uismod delgas
              tincidunt ut laoreet dolore magna...
            </p>

            <div className="speaker">
              <div className="li">
                <span>
                  <FaMicrophone />
                </span>
                <small>Speaker</small>
                <h3>John Doe</h3>
              </div>

              <div className="li">
                <span>
                  <FaTicketAlt />
                </span>
                <small>Max Seats</small>
                <h3>2,262 Seats</h3>
              </div>
              <button className="btnSpeaker">TICKETS & DETAILS</button>
            </div>
          </div>
        </div>
      </div>
      <div className="centreEvents">
        <div className="centreEv">
          <div className="centreEventImg">
            <div className="cornerItem">
              <span className="numMonth">26</span>
              <small className="month">June</small>
            </div>
            <hr />
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/event/event-2.jpg"
              alt=""
            />
          </div>
          <div className="centreEventInfo">
            <h2 className="title">Barcelona Food Truck Festival 2018</h2>
            <small className="price">Tickets from $52</small>
            <p className="desc">
              Lorem ipsum dollor site amet the best consectuer diam nerdistin
              adipiscing elites sed diam nonummy nibh the ebest uismod delgas
              tincidunt ut laoreet dolore magna...
            </p>

            <div className="speaker">
              <div className="li">
                <span>
                  <FaMicrophone />
                </span>
                <small>Speaker</small>
                <h3>John Doe</h3>
              </div>

              <div className="li">
                <span>
                  <FaTicketAlt />
                </span>
                <small>Max Seats</small>
                <h3>2,262 Seats</h3>
              </div>
              <button className="btnSpeaker">TICKETS & DETAILS</button>
            </div>
          </div>
        </div>
      </div>
      <div className="centreEvents">
        <div className="centreEv">
          <div className="centreEventImg">
            <div className="cornerItem">
              <span className="numMonth">26</span>
              <small className="month">June</small>
            </div>
            <hr />
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/event/event-3.jpg"
              alt=""
            />
          </div>
          <div className="centreEventInfo">
            <h2 className="title">Barcelona Food Truck Festival 2018</h2>
            <small className="price">Tickets from $52</small>
            <p className="desc">
              Lorem ipsum dollor site amet the best consectuer diam nerdistin
              adipiscing elites sed diam nonummy nibh the ebest uismod delgas
              tincidunt ut laoreet dolore magna...
            </p>

            <div className="speaker">
              <div className="li">
                <span>
                  <FaMicrophone />
                </span>
                <small>Speaker</small>
                <h3>John Doe</h3>
              </div>

              <div className="li">
                <span>
                  <FaTicketAlt />
                </span>
                <small>Max Seats</small>
                <h3>2,262 Seats</h3>
              </div>
              <button className="btnSpeaker">TICKETS & DETAILS</button>
            </div>
          </div>
        </div>
      </div>
      <div className="centreEvents">
        <div className="centreEv">
          <div className="centreEventImg">
            <div className="cornerItem">
              <span className="numMonth">26</span>
              <small className="month">June</small>
            </div>
            <hr />
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/event/event-5.jpg"
              alt=""
            />
          </div>
          <div className="centreEventInfo">
            <h2 className="title">Barcelona Food Truck Festival 2018</h2>
            <small className="price">Tickets from $52</small>
            <p className="desc">
              Lorem ipsum dollor site amet the best consectuer diam nerdistin
              adipiscing elites sed diam nonummy nibh the ebest uismod delgas
              tincidunt ut laoreet dolore magna...
            </p>

            <div className="speaker">
              <div className="li">
                <span>
                  <FaMicrophone />
                </span>
                <small>Speaker</small>
                <h3>John Doe</h3>
              </div>

              <div className="li">
                <span>
                  <FaTicketAlt />
                </span>
                <small>Max Seats</small>
                <h3>2,262 Seats</h3>
              </div>
              <button className="btnSpeaker">TICKETS & DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Centrebar;
