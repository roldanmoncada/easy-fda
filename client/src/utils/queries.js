import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      password
      savedFood {
        fdcId: Int
        description: String
        dataType: String
        publicationDate: String
    
      }
    }
  }
`;
// export const QUERY_ALL_FOODS = gql`
// query Query($description: String) {
//   foods(description: $description) {
//     fdcId
//     description
//   }
// }
// `

//   foodNutrients: [FoodNutrients] --> threw an error on line 15