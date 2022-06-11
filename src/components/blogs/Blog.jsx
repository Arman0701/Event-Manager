import React from "react";
import { Link } from "react-router-dom";
import "./blog.scss";
import Leftbar from "./sectionBlogs/leftbar/Leftbar";
import Rightbar from "./sectionBlogs/rightbar/Rightbar";

const Blogs = () => {
  return (
    <>
      <div className="img-container">
        <div className="titleDiv">
          <span>OUR BLOGS</span>
          <h2>
            HARMONI <span>Blogs</span>
          </h2>

          <div className="navHome">
            <span className="spanHome">
              <Link style={{ textDecoration: "none" }} to="/">
                <span className="spanHome"> Home </span>
              </Link>
            </span>
            <hr />
            <span>Our Blogs</span>
          </div>
        </div>
        <img src="/assets/mountain.jpg" alt="" className="img" />
      </div>

      <div className="sectionDiv">
        <div className="flexCol">
          <Leftbar />
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Blogs;
