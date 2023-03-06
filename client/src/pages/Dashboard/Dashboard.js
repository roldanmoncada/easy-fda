import { React, useState } from "react";

//import { useQuery } from "@apollo/client";
//import { QUERY_ME } from './utils/queries';
//import { QUERY_ALL_FOODS } from "../../utils/queries";
import "./Dashboard.css";
import Searchbox from "../../components/Searchbox/Searchbox";
 


const Dashboard = () => {
  const [close, setClose] = useState(false);
  const [active, setActive] = useState(false);
  const [dark, setDark] = useState(false);
  const [dark1, setDark1] = useState(false);
  const [dark2, setDark2] = useState(false);
  const [dark3, setDark3] = useState(false);

  function handleClick() {
    setClose((close) => !close);
  }
  function handleClick1() {
    setActive((active) => !active);
  }
  function handleClick2() {
    setDark((dark) => !dark);
    setDark1((dark1) => !dark1);
    setDark2((dark2) => !dark2);
    setDark3((dark3) => !dark3);
  }

  let toogleDark = dark ? "dark" : " ";
  let toogleDark1 = dark1 ? "infoContainer2" : " infoContainer1";
  let toogleDark2 = dark2 ? "dark2" : " ";
  let toogleDark3 = dark3 ? "tableBottom2" : " tableBottom";

  let toogleClose = close ? "close" : "open";
  let toogleActive = active ? "act" : " ";
  // const { loading, error, data } = useQuery(QUERY_ALL_FOODS, {variables: {query: "food"}});
  // if (loading) return null;
  // if (error) return "Error: " + error;
  // console.log(data);
  
  return (
    <div className={`dashboardContainer ${toogleDark}`}>
      <div className="flexContainer">
        <aside className={`${toogleClose} ${toogleDark2}`}>
          <div className="menu-items">
            <ul className="nav-links1">
              <li>
                <a href="/#">
                  <i className="fa-solid fa-house"></i>
                  <span className="link-name">Home</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fa-solid fa-user"></i>
                  <span className="link-name">UserName</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fa-solid fa-leaf"></i>
                  <span className="link-name">Name</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fa-solid fa-cloud"></i>
                  <span className="link-name">Content</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fa-solid fa-book"></i>
                  <span className="link-name">Recipes</span>
                </a>
              </li>
            </ul>
            <ul className="logout-mod ">
              <li>
                <a href="/#">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span className="link-name">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <section className="dashboard">
          <div className="top">
            <i
              onClick={handleClick}
              className="fa-solid fa-bars iconDashboard"></i>
            <div onClick={handleClick2}>
              <div
                onClick={handleClick1}
                className={`toggle-btn ${toogleActive} `}>
                <div className="inner-circle"></div>
              </div>
            </div>
            <div className="search-box">
              <Searchbox />
            </div>
          </div>
          <div className="topInfoContainer">
            <div className="dashboardTitle">
              <i className="fa-solid fa-gauge"></i> <h2> Dashboard</h2>
            </div>
            <div className={`infoContainer1 ${toogleDark1}`}>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ad dolorum eius quidem e
              </p>
              <p>afsdfads</p>
            </div>
            <div className={`infoContainer1 ${toogleDark1}`}>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ad
              </p>
              <p>afsdfads</p>
            </div>
            <div className={`infoContainer1 ${toogleDark1}`}>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus ad dolorum eius quidem e
              </p>
              <p>a12323</p>
            </div>
          </div>
          <div className="bottomInfoContainer">
            <div className="titleBottom">
              <i className="fa-solid fa-seedling"></i> <h2>Title</h2>
            </div>
            <div className={`tableBottom ${toogleDark3}`}></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
