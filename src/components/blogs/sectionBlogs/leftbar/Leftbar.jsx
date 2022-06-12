import "./leftbar.scss";
import { FaBookmark } from "react-icons/fa";
import React from "react";
import useFetch from "./../../../../hooks/useFetch";

const Leftbar = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5500/api/concerts"
  );

  return (
    <div className="leftbar">
      <hr />
      <div className="leftbarFlex">
      <div>
          {loading
            ? "loading..."
            : data.map((data) => (
                <div className="left" key={data._id}>
                  <span className="spanDate">{data.date} {data.month} 2018 - 4.00 PM </span>
                  <img src={data.post} alt="" />

                  <div className="leftbarText">
                    <span className="textMusicalEvent">
                      <FaBookmark /> {data.title}
                    </span>

                    <h3>{data.location}</h3>
                    <p>
                  {data.desc}
                    </p>
                    <button>READ MORE</button>
                  </div>
                </div>
              ))}
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
