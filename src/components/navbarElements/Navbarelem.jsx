import React, { useContext } from "react";
import "./navbarelem.scss";
import { useState } from "react";
import { FaLock, FaPhone, FaSearch, FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../navbar/assets/logo2.png";
import { Link } from "react-router-dom";
import { Popup } from "reactjs-popup";
import SignInPage from "../LoginRegisterPage/SignInPage";
import { AuthContext } from "./../../context/authContext";

const registerPopupStyles = {};

const Navbarelem = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset ? true : false);
  };
  const { user } = useContext(AuthContext);

  return (
    <div className={isScrolled ? "navbarel scrolled" : "navbarel"}>
      <div className="register">
        <div className="inf">
          <span className="inf">
            <MdEmail className="icon" />
            infoharmoni@mail.ru
          </span>
          <div className="ln"></div>
          <div className="itemsInf">
            <span className="inf">
              <FaPhone className="icon" />
              +374 010101
            </span>
          </div>
        </div>
        <div className="lgn">
          {user ? (
            user.username
          ) : (
            <>
              <Popup
                className="popup"
                trigger={
                  <span className="lg">
                    <FaUserAlt className="lgicon" /> Register
                  </span>
                }
                arrow={false}
                contentStyle={registerPopupStyles}
              >
                <SignInPage />
              </Popup>
              <div className="ln"></div>
              <div>
                <span className="lg">
                  <FaLock className="lgicon" /> Login
                </span>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="container">
        <div className="leftimg">
          <img src={logo} alt="" />
        </div>

        <div className="navigation">
          <Link className="link" to="/">
            <span>HOME</span>
          </Link>
          <Link className="link" to="/about">
            {" "}
            <span>ABOUT</span>
          </Link>
          <Link className="link" to="/events">
            {" "}
            <span>EVENTS</span>
          </Link>
          <Link className="link" to="/blogs">
            {" "}
            <span>BLOGS</span>
          </Link>
          <Link className="link" to="/gallery">
            {" "}
            <span>GALLERY</span>
          </Link>
          <Link className="link" to="/speaker">
            <span>SPEAKER</span>
          </Link>
          <Link className="link" to="/contact">
            {" "}
            <span>CONTACT</span>
          </Link>
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

export default Navbarelem;
