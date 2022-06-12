import React from "react";
import "./centrebar.scss";
import { FaMicrophone, FaThList, FaTicketAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdTableChart } from "react-icons/md";
import useFetch from "./../../../../hooks/useFetch";
import { Link } from "react-router-dom";

const Centrebar = () => {
  const { data, loading, error } = useFetch("http://localhost:5500/api/films");

  console.log(data);
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

      {loading
        ? "loading..."
        : data.map((data) => (
            <div className="centreEvents" key = {data._id}>
              <div className="centreEv">
                <div className="centreEventImg">
                  <div className="cornerItem">
                    <span className="numMonth">{data.date}</span>
                    <small className="month">{data.month}</small>
                  </div>
                  <hr />
                  <img src={data.post} alt="" />
                </div>
                <div className="centreEventInfo">
                  <h2 className="titleFilm">{data.title}</h2>
                  <small className="price">
                    Tickets from ${data.priceFilm}
                  </small>
                  <p className="descP">{data.desc}</p>

                  <div className="speaker">
                    <div className="li">
                      <span>
                        <MdLocationOn />
                      </span>
                      <small>Loacation</small>
                      <h3>{data.location}</h3>
                    </div>

                    <div className="li">
                      <span>
                        <FaTicketAlt />
                      </span>
                      <small>Max Seats</small>
                      <h3>{data.seats} Seats</h3>
                    </div>
                    <nav>
                    <Link to='eventDetails' className="btnSpeaker">TICKETS & DETAILS</Link>
                    </nav>
                   
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Centrebar;
