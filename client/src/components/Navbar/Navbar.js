import { React, useContext, useState } from "react";
import "./Navbar.css";
import { changeClassName } from "../../Helper/changeClassName";

const Navbar = () => {
  const [classIcon, setIcon] = useState(false);
  const [closeNav, setCloseNav] = useState(false);

  const { setPopUp } = useContext(changeClassName);

  function popUpButton() {
    setPopUp((popUp) => !popUp);
  }

  function handleClick() {
    setIcon((classIcon) => !classIcon);
    setCloseNav((closeNav) => !closeNav);
  }
  let toogleIcon = classIcon ? "fa-times" : "fa-bars";
  let toogleNav = closeNav ? "nav-menu active" : "nav-menu";

  return (
    <nav className="navbarItems">
      <div className="iconContainer">
        <div className="iLogo">
          <i className="fa-brands fa-nutritionix "></i>
        </div>
        <div className="fs ">
          <h2>Easy-FDA </h2>
        </div>
      </div>
      <div className="menu-icons">
        <i className={`fas ${toogleIcon}`} onClickCapture={handleClick}></i>
      </div>

      <ul className={toogleNav}>
        <li>
          <a href="/" className="nav-links">
            <i className=" fa-solid fa-house-user"></i>HOME
          </a>
        </li>
        <li>
          <a href="/Dashboard" className="nav-links">
            <i className=" fa-solid fa-users-gear"></i>Dashboard
          </a>
        </li>
        <li>
          <a href="/About" className="nav-links">
            <i className=" fa-solid fa-circle-info"></i>ABOUT
          </a>
        </li>

        <li>
          <a href="/Contact" className="nav-links">
            <i className=" fa-solid fa-address-book"></i>CONTACT
          </a>
        </li>

        <li>
          <a href="/Content" className="nav-links">
            <i className=" fa-solid fa-address-book"></i>CONTENT
          </a>
        </li>
        <li>
          <span className="nav-links btnLogin" onClickCapture={popUpButton}>
            Login
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
