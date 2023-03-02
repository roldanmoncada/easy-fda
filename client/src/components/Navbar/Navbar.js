import { React, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  var test;
  const [classIcon, setIcon] = useState(false);
  const [closeNav, setCloseNav] = useState(false);
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
        <i className={`fas ${toogleIcon}`} onClick={handleClick}></i>
      </div>
      <ul className={toogleNav}>
        <li>
          <a href="/" className="nav-links">
            <i className=" fa-solid fa-house-user"></i>HOME
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
      </ul>
    </nav>
  );
};

export default Navbar;
