import React from "react";
import "./navbar.scss";
import { useState } from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import logo from "./assets/logo.png";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="leftimg">
          <img src={logo} alt="" />
        </div>

        <div className="navigation">
          <span className="span1">HOME</span>
          <span>ABOUT</span>
          <span>EVENTS</span>
          <span>BLOGS</span>
          <span>GALLERY</span>
          <span>SPEAKER</span>
          <span>CONTACT</span>
        </div>
        <div className="right ">
          <span>
            <FaUserAlt />
          </span>
          <span>
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
