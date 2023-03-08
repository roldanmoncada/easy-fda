// export const searchFoods = (query) => {
//   return fetch(
//     `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=blRyZDRgqeBVA3sGp7KTJdcUD1U38l754oWn9CbZ&query=${query}&pageSize=20`
//   );
// };

// import { useQuery } from "@apollo/client";
// import gql from 'graphql-tag'

// const QUERY_FOOD_BY_NAME = gql`
//   query Query($description: String!) {
//     foodByName(description: $description) {
//       fdcId
//       description

//     }
//   }`;

//   export function SearchFoods({ description }) {

//   const { loading, error, data } = useQuery(QUERY_FOOD_BY_NAME, { variables: { description: description },
//   });

//   if (loading) return <p>Loading</p>
//   if (error) return <p>Error </p>;

//   return (
//     <div> 
//       {data.foodByName}
//     </div>
//   )
// }