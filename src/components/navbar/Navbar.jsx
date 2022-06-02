import React from "react";
import "./navbar.scss";
import { useState } from "react";
import { FaSearch, FaUserAlt } from "react-icons/fa";
import logo from "./assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
   
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    isScrolled++
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="leftimg">
          <img src={logo} alt="" />
        </div>

        <div className="navigation">
         <Link className="link" to="/"><span className="span1">HOME</span></Link>
         <Link className="link" to="/about"> <span>ABOUT</span></Link>
         <Link className="link" to="/events"> <span>EVENTS</span></Link>
         <Link className="link" to="/blogs"> <span>BLOGS</span></Link>
         <Link className="link" to="/gallery">  <span>GALLERY</span></Link>
         <Link className="link" to="/speaker"><span>SPEAKER</span></Link>
         <Link className="link" to="/contact"> <span>CONTACT</span></Link>                 
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
