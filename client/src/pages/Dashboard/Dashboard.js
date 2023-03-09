
import { React, useState, useEffect } from "react";

import Auth from "../../utils/auth";
import "./Dashboard.css";
import { QUERY_FOOD_BY_NAME, QUERY_ME } from "../../utils/queries";
import { SAVE_FOOD } from "../../utils/mutations";
import { saveFoodIds, getSavedFoodIds } from "../../utils/localStorage";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";

//import { QUERY_ME } from './utils/queries';

// import { SearchFoods } from "../../utils/api";

// import { REMOVE_FOOD } from "../../utils/mutations";

const Dashboard = () => {
  const [close, setClose] = useState(false);
  const [active, setActive] = useState(false);
  const [dark, setDark] = useState(false);
  const [dark1, setDark1] = useState(false);
  const [dark2, setDark2] = useState(false);
  const [dark3, setDark3] = useState(false);

  const [searchInput, setSearchInput] = useState("");
  const [searchedFood, setSearchedFood] = useState([]);
  const [savedFoodIds, setSavedFoodIds] = useState(getSavedFoodIds());

  const [saveFood] = useMutation(SAVE_FOOD);

  useEffect(() => {
    return () => {
      saveFoodIds(savedFoodIds);
    };
  });

  const [foodSearch] = useLazyQuery(QUERY_FOOD_BY_NAME, {
    onCompleted: (food) => setSearchedFood(food.foodByName),
  });

  const { data } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  //console.log(userData);

  if (!userData?.username) {
    return <p>Must be logged in!</p>;
  }

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }

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
   

  const handleFormSubmitInput = async (e) => {
    e.preventDefault();

    if (!searchInput) {
      return false;
    }
    foodSearch({ variables: { query: searchInput } });

     
  };

  const handleSaveFood = async (fdcId) => {
    const foodToSave = searchedFood.find((food) => food.fdcId === fdcId)
    // ----searchedFood is an array now, therefore .find is working---

    try {
      const { data } = await saveFood({
        variables: { input: foodToSave}
      });
      setSavedFoodIds([...savedFoodIds, foodToSave.fdcId]);
    } catch  (err) {
      console.error(err);
    }
    };
    // saveFoodIds([foodToSave]); /
    // try {
    //   await saveFoodIds({
    //     variables: { food: foodToSave },
    //     update: (cache) => {
    //       const { me } = cache.readQuery({ query: QUERY_ME });
    //       console.log(me);
    //       console.log(me.savedFood);
    //       cache.writeQuery({
    //         query: QUERY_ME,
    //         data: { me: { ...me, savedFood: [...me.savedFood, foodToSave] } },
    //       });
    //     },
    //   });
    //   setSavedFoodIds([...savedFoodIds, foodToSave.fdcId]);
    // } catch (error) {
    //   console.error(error);
    //  } 
     
  

  // const [removeFood, { loading, error, data }] = useMutation(REMOVE_FOOD);
  // removeFood({ variables: { fdcId: "2012128" } });
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
              <div></div>
              <li>
                <a href="/#">
                  <i className="fa-solid fa-user"></i>
                  <span className="link-name">{userData?.username}</span>
                </a>
              </li>

              <li>
                <a href="/Content">
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
                  <span className="link-name" onClick={Auth.logout}>
                    Logout
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <section className="dashboard">
          <div className="top">
            <i
              onClick={handleClick}
              className="fa-solid fa-bars iconDashboard"
            ></i>
            <div onClick={handleClick2}>
              <div
                onClick={handleClick1}
                className={`toggle-btn ${toogleActive} `}
              >
                <div className="inner-circle"></div>
              </div>
            </div>
            <div className="search-box">
              {/* //-----------inputSearch-------------// */}

              <form onSubmit={handleFormSubmitInput}>
                <div className="input-dashboard">
                  <span className="icon">
                    <i className="fas fa-wheat-alt"></i>
                  </span>
                  <input
                    name="searchInput"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    required
                  />
                  <label>Search the food</label>

                  <button className="searchBtn">Search </button>
                </div>
              </form>

              {/* //-----------input-------------// */}
            </div>
          </div>
          <div className="topInfoContainer">
            <div className="dashboardTitle">
              <i className="fa-solid fa-gauge"></i> <h2> Dashboard</h2>
            </div>
            <div className={`infoContainer1 ${toogleDark1}`}>
              <h2>{searchedFood?.foodByName?.description}</h2>
              <p>{searchedFood?.foodByName?.dataType}</p>
              <p>{searchedFood?.foodByName?.brandOwner}</p>
            </div>
 {/*  following button is working */}
            <button onClick={() => handleSaveFood(searchedFood[0].fdcId)}>
              Save Food
            </button>
 
          </div>
          <div className="bottomInfoContainer">
            <div className="titleBottom">
              <i className="fa-solid fa-seedling"></i>{" "}
              <h2>{searchedFood?.foodByName?.description}</h2>
            </div>
            <div className={`tableBottom ${toogleDark3}`}>
 
              <table className="content-table">
                <thead>
                  <tr>
                    <th>Nutrient Name</th>
                    <th>Amount</th>

                    <th>Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {searchedFood?.foodByName?.foodNutrients?.map((nutrient) => {
                    return (
                      <tr
                        key={`${searchedFood?.foodName?.description}-${nutrient.nutrientId}`}>
                        {" "}
                        <td>{nutrient.nutrientName}</td>
                        <td>{nutrient.nutrientNumber}</td>
                        <td>{nutrient.unitName}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
 
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
