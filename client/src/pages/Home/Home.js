/* eslint-disable jsx-a11y/anchor-is-valid */
import { React, useState, useContext } from "react";
import "./Home.css";
import { changeClassName } from "../../Helper/changeClassName";
import { motion } from "framer-motion";

const Home = () => {
  const [changeActive, setActive] = useState(false);
  const { popUp, setPopUp } = useContext(changeClassName);

  const renderImage = () => {
    const Images = [
      { image: "./images/background.jpg" },
      { image: "./images/background1.jpg" },
      { image: "./images/background2.jpg" },
      { image: "./images/background3.jpg" },
      { image: "./images/background4.jpg" },
    ];
    const randomImageIndex = Math.floor(Math.random() * Math.floor(5));

    return Images[randomImageIndex].image;
  };

  function handleClick1(e) {
    e.stopPropagation();
    setPopUp((popUp) => !popUp);
  }

  function handleClick(e) {
    e.stopPropagation();
    setActive((changeActive) => !changeActive);
  }

  let toogleActive = changeActive ? "active" : "inactive ";

  return (
    <div className="homeContainer">
      <div className="homeIntroduction">
        <div className="introduction">
          <h1>Easy-FDA</h1>
          <div className="descriptionContainer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              autem molestias facere esse obcaecati est nesciunt soluta in quae
              deleniti repudiandae, nobis, similique dolores expedita atque unde
              cum a tempora.
            </p>
          </div>
          <div className="descriptionContainer">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur soluta earum neque eius veniam quasi totam culpa, cum
              harum error mollitia suscipit accusamus cumque consequatur nihil.
              Quo doloremque dolorem amet?
            </p>
          </div>
        </div>
        <motion.div
          className="logIn"
          style={{ backgroundImage: `url(${require(`${renderImage()}`)})` }}
          animate={{ y: ["-5px", "5px", "-5px"] }}
          transition={{ y: { duration: 3, repeat: Infinity } }}>
          <div
            className={`wrapper ${toogleActive} ${popUp ? "popUp" : " "}`}
            id="wrapper">
            <span className="icon-close" onClick={handleClick1}>
              <i className="fas fa-xmark"></i>
            </span>
            <div className="form-box login " id="login">
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
                    <span
                      onClick={
                        ((e) => {
                          e.stopPropagation();
                        },
                        handleClick)
                      }
                      className="register-link">
                      &nbsp; Register
                    </span>
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
                    <span onClick={handleClick} className="login-link">
                      &nbsp; Login
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
