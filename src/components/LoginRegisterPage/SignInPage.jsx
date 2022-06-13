import React from "react";
import style from "./SignInPage.module.css";
import logo from "../../assets/img/site-logo.png";
import facebookLogo from "../../assets/img/fb-logo.svg";
import { useState } from "react";
import { ValidateEmail, ValidatePassword } from "../../helpers/validate";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useRef } from "react";


export default function SignInPage({}) {
  const params = useParams();
  const [isLogin, setIsLogin] = useState(false);

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const userLoginHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:5500/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCES", payload: res.data });
      navigate("/profile");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  const username = useRef();
  const surname = useRef();
  const email = useRef();
  const phone = useRef();
  const password = useRef();
  const navigatelogin = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      surname: surname.current.value,
      phone: phone.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    try {
      await axios.post("http://localhost:5500/api/auth/register", user);
        setIsLogin(true)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.popupContent}>
      <div className={style.pageWrapper}>
        <div className={style.imageWrapper}>
          <div className={style.bgLayer}>
            <div className={style.logo}>
              <img src={logo} alt="logo" />
            </div>
            <div className={style.imageWrapperContent}>
              <p onClick={() => setIsLogin(true)}>LOGIN</p>
              <p onClick={() => setIsLogin(false)}>REGISTER</p>
            </div>
          </div>
        </div>
        <div className={style.formPart}>
          {isLogin ? (
            <>
              <div className={style.formHeader}>
                <p>Account Login</p>
                <p>
                  Login to our website, or <span>REGISTER</span>
                </p>
              </div>
              <div className={style.facebookLoginBtn}>
                <div className={style.buttonLeftSide}>
                  <div className={style.logoWrapper}>
                    <img src={facebookLogo} alt="logo" />
                  </div>
                </div>
                <p>Login With Facebook</p>
              </div>
              <div className={style.line}>
                <p>OR SIGN IN</p>
              </div>
              <div className={style.formWrapper}>
                <input
                  type="text"
                  id="username"
                  placeholder="username"
                  required
                  onChange={handleChange}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
                <div
                  disabled={loading}
                  className={style.submitBtn}
                  onClick={userLoginHandler}
                >
                  LOGIN NOW
                </div>
                {error && <span>{error.message}</span>}
              </div>
            </>
          ) : (
            <div className={style.registerFormWrapper}>
              <p>Create your account</p>
              <div className={style.registerForm}>
                <form onSubmit={handleClick}>
                  <label>
                    <p>Name</p>
                    <input type="text" ref={username} required />
                  </label>
                  <label>
                    <p>Surname</p>
                    <input type="text" ref={surname} required />
                  </label>
                  <label>
                    <p>Phone</p>
                    <input type="text" ref={phone} required />
                  </label>
                  <label>
                    <p>Email</p>
                    <input type="email" ref={email} required />
                  </label>
                  <label>
                    <p>Password</p>
                    <input type="password" ref={password} required />
                  </label>
                  <button
                    type="submit"
                    className={style.registerSubmitButton}
                    // onClick={userRegisterHandler}
                  >
                    Create account
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
