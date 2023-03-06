import React from "react";
import "./Footer.css";
import About from "../About/About";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social">
          <a
            href="https://twytter-redo.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-crow"></i>
          </a>
          <a
            href="https://github.com/roldanmoncada/easy-fda"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <ul className="list">
          <li>
            <a href="#/" onClick={About}>
              About
            </a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
          <li>
            <a href="/Contact">Services</a>
          </li>
          <li>
            <a href="/Contact">Terms</a>
          </li>
        </ul>
        <p className="copyright">Easy-FDA 2021 @ 2023</p>
      </footer>
    </>
  );
};

export default Footer;
