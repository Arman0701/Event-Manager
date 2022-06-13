import "./rightbar.scss";
import { AiOutlineArrowUp } from "react-icons/ai";
import React from "react";
import EventAcardion from "../../../EventAcardion";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="postsInfo">
        <EventAcardion/>
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
