/* eslint-disable jsx-a11y/anchor-is-valid */
import Auth from "../../utils/auth";
import { React, useState, useContext, useEffect } from "react";
import "./Home.css";
import { changeClassName } from "../../Helper/changeClassName";
import { motion } from "framer-motion";

import { ADD_PROFILE, LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const Home = () => {
  ////----------------LogIn--------------//////

  const [formState1, setFormState1] = useState({ email: "", password: "" });
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  // console.log({ data1 });
  // update state based on form input changes

  useEffect(() => {
    document.title = ` Easy-FDA | Home `;
  }, []);

  const handleChangeLogIn = (event) => {
    const { name, value } = event.target;

    setFormState1({
      ...formState1,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmitLogin = async (event) => {
    event.preventDefault();
    console.log(formState1);
    try {
      const { data } = await loginUser({
        variables: { ...formState1 },
      });
      console.log({ data });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState1({
      email: "",
      password: "",
    });
  };

  ////----------------Signup--------------//////
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addProfile] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChangeSignIn = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmitSignup = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  //-----------------------------------------------///
  const [changeActive, setActive] = useState(false);
  const { popUp, setPopUp } = useContext(changeClassName);

  const renderImage = (e) => {
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
  const [randomImage, setRandomImage] = useState(renderImage());
  const [randomImage1, setRandomImage1] = useState(renderImage());

  function handleClick1(e) {
    e.preventDefault();
    setPopUp((popUp) => !popUp);
  }

  function handleClick(e) {
    e.stopPropagation();
    setActive((changeActive) => !changeActive);
  }

  useEffect(() => {
    setRandomImage(renderImage());
    setRandomImage1(renderImage());
  }, []);

  let toogleActive = changeActive ? "active" : "inactive ";

  return (
    <div className="homeContainer">
      <div className="homeIntroduction">
        <div
          className="introduction"
          style={{ backgroundImage: `url(${require(`${randomImage1}`)})` }}>
          <h1>Easy-FDA</h1>
          <div className="descriptionContainer">
            <p>
              Currently, anyone can Google a specific ingredient or product, but
              the search results are general and vast. This can mislead users to
              sites that are at the top of a search, but do not provide reliable
              information
            </p>
          </div>
          <div className="descriptionContainer">
            <p>
              This app allows users to query the official USDA API for
              information on a given food and/or ingredient to a food. This app
              will be available to the general public but can help several
              specific demographics such as new/expecting parents looking to
              verify the safety of ingredients in food they are giving their
              infant.
            </p>
          </div>
        </div>
        <motion.div
          className="logIn"
          style={{ backgroundImage: `url(${require(`${randomImage}`)})` }}
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
              {/* {data1 && ( */}
              <form onSubmit={handleFormSubmitLogin}>
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formState1.email}
                    onChange={handleChangeLogIn}
                    required
                  />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={formState1.password}
                    onChange={handleChangeLogIn}
                    required
                  />
                  <label>Password</label>
                </div>
                <div className="remember-forgot">
                  <label htmlFor="">
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <a href="/">Forgot Password?</a>
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
              {/* )} */}
              {error && <div>Login failed</div>}
            </div>
            {/* ----------Register-------- */}
            <div className="  form-box register">
              <h2>Registration</h2>
              {/* {data && ( */}
              <form onSubmit={handleFormSubmitSignup}>
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-user"></i>
                  </span>
                  <input
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChangeSignIn}
                    required
                  />
                  <label>Username</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChangeSignIn}
                    required
                  />
                  <label>Email</label>
                </div>
                <div className="input-box">
                  <span className="icon">
                    <i className="fas fa-lock"></i>
                  </span>
                  <input
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChangeSignIn}
                    required
                  />
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
              {/* )} */}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
