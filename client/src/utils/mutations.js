import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const REMOVE_FOOD = gql`mutation removeFood($fdcId: ID!) {
  removeFood(fdcId: $fdcId) {
    username
  }
}`

 
export const SAVE_FOOD = gql`
mutation saveFood($food: FoodByName) {
  saveFood(food: $food) {
    username
  }
}`

//   mutation saveFood($food: FoodByName!) {
//     savedFood(food: FoodInput!) {
//       _id
//       username
//       email
//       savedFood {
//         fdcId
//         description
//         dataType
//         publicationDate
//       }
//     }
//   }
// `;
