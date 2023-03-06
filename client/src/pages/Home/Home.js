/* eslint-disable jsx-a11y/anchor-is-valid */
import Auth from "../../utils/auth";
import { React, useState, useContext } from "react";
import "./Home.css";
import { changeClassName } from "../../Helper/changeClassName";
import { motion } from "framer-motion";

import { ADD_PROFILE, LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const Home = () => {
  ////----------------LogIn--------------//////

  const [formState1, setFormState1] = useState({ email: "", password: "" });
  const [login, { data1 }] = useMutation(LOGIN_USER);

  console.log({ data1 });
  // update state based on form input changes
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
      const { data1 } = await login({
        variables: { ...formState1 },
      });

      Auth.login(data1.login.token);
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
  const [addProfile, { data }] = useMutation(ADD_PROFILE);

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

      Auth.login(data.addProfile.token);
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
              {data1 && (
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
              )}
            </div>
            {/* ----------Register-------- */}
            <div className="  form-box register">
              <h2>Registration</h2>
              {data && (
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
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
