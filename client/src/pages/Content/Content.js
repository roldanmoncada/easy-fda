import React from "react";
import "./Content.css";
import { REMOVE_FOOD } from "../../utils/mutations"
import { QUERY_ME } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../../utils/auth";

const Content = () => {
  const { data } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  console.log(userData)
  
  if (!userData?.username) {
    return (
      <p>Must be logged in!</p>
    )
  }

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

  return (
    <div className="contentContainer">
      <div className="cardsContainer">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date cards">4 days ago</span>
            <h2 className="cards">Post One</h2>
            <p className="cards">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga
              tempora odio laborum deleniti nulla, impedit exercitationem alias
              fugit consectetur nihil
            </p>
          </div>
          <div className="card-stats">
            <div className="stat">
              <div className="value">314</div>
              <div className="type">calories</div>
            </div>
            <div className="stat border">
              <div className="value">513</div>
              <div className="type">calories</div>
            </div>
            <div className="stat">
              <div className="value">1234</div>
              <div className="type">afssfa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
