import { React, useEffect } from "react";
import "./Content.css";
import { REMOVE_FOOD } from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
import { useQuery, useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { removeFoodId } from "../../utils/localStorage";

const Content = () => {
  const { data } = useQuery(QUERY_ME);
  const [ deleteFood ] = useMutation(REMOVE_FOOD);
  const userData = data?.me || {};


  //console.log(userData)
  
  console.log(userData);

  useEffect(() => {
    document.title = ` Easy-FDA | Content `;
  }, []);


  if (!userData?.username) {
    return <p>Must be logged in!</p>;
  }
const handleDeleteFood = async (fdcId) => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    return false;
  }
  // try {
  //   await deleteFood({
  //     variables: { fdcId: fdcId },
  //       update: cache => {
  //       const data = cache.readQuery({ query: QUERY_ME });
  //       const userDataCache = data.me;
  //       const savedFoodCache = userDataCache.savedFood;
  //       const updatedFoodCache =savedFoodCache.filter((food) => food.fdcId !== fdcId);
  //       data.me.savedFood = updatedFoodCache;
  //         cache.writeQuery({
  //           query: QUERY_ME,
  //           data: { data: { ...data.me.savedFood } },
  //         });
  //       },
  //     });
  //     removeFoodId(fdcId);
  //   } catch (error) {
  //     console.error(error);
  //    } 
    };
     

  return (
    <div className="contentContainer">
      <div className="cardsContainer">
        <div className="card">
          <div className="card-image"></div>
          <div className="card-text">
            <span className="date cards">4 days ago</span>
            <h2 className="cards">  
               {/* {userData.savedFood.length
            ? `Viewing ${userData.savedFood.length} saved ${userData.savedFood.length === 1 ? 'food' : 'food items'}:`
            : 'You have no saved food items!'}  */}
            </h2> 
            <p   className="cards">
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
