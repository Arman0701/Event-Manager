import React from "react";
import "./rightbar.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
const Rightbar = () => {
  return (
    <div className="rightbar">
      <span className="titlepst">
        Recent <small>Post</small>
      </span>
      <div className="postsInfo">
        <div className="infoItems">
          <span>How to joinn this event?</span>
          <span className="icon">
            <AiOutlineArrowUp />
          </span>
        </div>
        <div className="infoItems">
          <span>How to joinn this event?</span>
          <span className="icon">
            <AiOutlineArrowUp />
          </span>
        </div>
        <div className="infoItems">
          <span>How to joinn this event?</span>
          <span className="icon">
            <AiOutlineArrowUp />
          </span>
        </div>
        <div className="infoItems">
          <span>How to joinn this event?</span>
          <span className="icon">
            <AiOutlineArrowUp />
          </span>
        </div>
        <div className="infoItems">
          <span>How to joinn this event?</span>
          <span className="icon">
            <AiOutlineArrowUp />
          </span>
        </div>
        <div className="conferenceItem">
          <div className="textItems">
            <span className="dte">26 DECEMBER 2018</span>
            <span className="citynm">AMSTERDAM</span>
            <span className="confnm"> PHP CONFERENCE</span>
            <div>
              <button className="confBtn">BOKKING TICKET</button>
            </div>
          </div>
          <img
            src="https://www.phpconference.nl/sites/default/files/2020-10/p6080014.960x0.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
