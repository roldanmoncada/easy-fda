import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      password
      savedFoods {
        fdcId: Int
        description: String
        dataType: String
        publicationDate: String
        foodNutrients: [FoodNutrients]
      }
    }
  }
`;
