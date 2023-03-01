/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState } from "react";
import "./Home.css";

const Home = () => {
  const [changeActive, setActive] = useState(false);

  function handleClick() {
    setActive((changeActive) => !changeActive);
  }

  let toogleActive = changeActive ? "active" : "inactive ";

  return (
    <div className="homeContainer">
      <div className="homeIntroduction">
        <div className="introduction"></div>
        <div className="logIn">
          <div className={`wrapper ${toogleActive}`}>
            <span className="icon-close">
              <i className="fas fa-xmark"></i>
            </span>

            <div className="form-box login ">
              <h2>Login</h2>
              <form action="#">
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input type="email" required />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input type="password" required />
                  <label>Password</label>
                </div>
                <div className="remember-forgot">
                  <label htmlFor="">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="/#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
                <div className="login-register">
                  <p>
                    Don't have an account?
                    <a href="#" onClick={handleClick} className="register-link">
                      &nbsp; Register
                    </a>
                  </p>
                </div>
              </form>
            </div>

            {/* ----------Register-------- */}

            <div className="  form-box register">
              <h2>Registration</h2>
              <form action="#">
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-user"></i>
                  </span>
                  <input type="text" required />
                  <label>Username</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input type="email" required />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input type="password" required />
                  <label>Password</label>
                </div>
                <div className="remember-forgot">
                  <label htmlFor="">
                    <input type="checkbox" />I agree to the terms & conditions
                  </label>
                </div>
                <button type="submit" className="btn">
                  Register
                </button>
                <div className="login-register">
                  <p>
                    Already have an account?
                    <a href="#" onClick={handleClick} className="login-link">
                      &nbsp; Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
