import React from "react";
import "./leftbar.scss";
import { FaBookmark } from "react-icons/fa";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <hr />
      <div className="leftbarFlex">
        <div className="left">
          <span className="spanDate">26 MAY 2018 - 4.00 PM </span>
          <img
            src="https://jthemes.net/themes/html/harmony-event/assets/images/blog/musical-event1.jpg"
            alt=""
          />

          <div className="leftbarText">
            <span className="textMusicalEvent">
              <FaBookmark /> Musical Event
            </span>

            <h3>Biggest Musical Event</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button>READ MORE</button>
          </div>
          <div className="left">
            <span className="spanDate">26 MAY 2018 - 4.00 PM </span>
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/blog/confarence-event1.jpg"
              alt=""
            />

            <div className="leftbarText">
              <span className="textMusicalEvent">
                <FaBookmark /> Musical Event
              </span>

              <h3>Biggest Musical Event</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button>READ MORE</button>
            </div>
          </div>

          <div className="left">
            <span className="spanDate">26 MAY 2018 - 4.00 PM </span>
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/blog/big-ebent2.jpg"
              alt=""
            />

            <div className="leftbarText">
              <span className="textMusicalEvent">
                <FaBookmark /> Musical Event
              </span>

              <h3>Biggest Musical Event</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>

        <div className="rightFlex">
          <div className="right">
            <span className="spanDate">26 MAY 2018 - 4.00 PM </span>
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/blog/confarence-event2.jpg"
              alt=""
            />
            <div className="rightbarText">
              <span className="textMusicalEvent">
                <FaBookmark /> Musical Event
              </span>

              <h3>Biggest Musical Event</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
          <div className="right">
            <span className="spanDate">26 MAY 2018 - 4.00 PM </span>
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/blog/big-ebent1.jpg"
              alt=""
            />
            <div className="rightbarText">
              <span className="textMusicalEvent">
                <FaBookmark /> Musical Event
              </span>

              <h3>Biggest Musical Event</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
          <div className="right">
            {/* <span className="spanDate">26 MAY 2018 - 4.00 PM </span>
            <img
              src="https://jthemes.net/themes/html/harmony-event/assets/images/blog/big-ebent2.jpg"
              alt=""
            /> */}
            <div className="rightbarText">
              <span className="textMusicalEvent">
                <FaBookmark /> Musical Event
              </span>

              <h3>Biggest Musical Event</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <button>READ MORE</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
