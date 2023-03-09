// import { React, useState, useEffect } from "react";
// import { QUERY_FOOD_BY_NAME } from "../../utils/queries";
// import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
// import Dashboard from "../../pages/Dashboard/Dashboard";
// import searchedFood from "../../pages/Dashboard/Dashboard";

// const Container = () => {
//   //     const [searchedFood, setSearchedFood] = useState([]);

//   //   const [foodSearch] = useLazyQuery(QUERY_FOOD_BY_NAME, {
//   //     onCompleted: (food) => setSearchedFood(food.foodByName),
//   //   });

//   return (
//     <>
//       <div className={`infoContainer1`}>
//         {searchedFood.map((food) => (
//           <>
//             <h2>{food.description}</h2>
//             <p>{food.dataType}</p>
//             <p>{food.brandOwner}</p>
//           </>
//         ))}
//         <button
//         // className="saveBtn"
//         // onClick={() => handleSaveFood(searchedFood[0].fdcId)}
//         >
//           Save Food
//         </button>
//       </div>
//       ;{/* following button is working */}
//     </>
//   );
// };

// export default Container;
