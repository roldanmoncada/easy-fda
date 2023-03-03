const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String! 
    password: String!
    foods: [Food]
    savedFoods: [bookmarkedFoods]
  }


  type Food { fdcId: Int
    description: String
    dataType: String
    publicationDate: String
    foodNutrients: [FoodNutrients] }

    type FoodNutrients {
      number: String
      name: String
      amount: Int
      unitName: String   
      derivationCode: String
      derivationDescription: String
    }
    type Auth {
      token: ID!
      user: User
    }
   
   

  type Query {
    foods: [Food]
    foodById( fdcId: String): Food
    foodByName(description: String): Food
    nutrients: [FoodNutrients]
    nutrient(name: String, amount: Int, unitName: String): FoodNutrient
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
    addFood(fdcId: String!, description: String!, dataType: String, publicationDate: String, foodNutrients: [String ]): User
    removeFood(fdcId: String!, description: String!, dataType: String!, publicationDate: String!, foodNutrients: [String ]!): User
    updateUserFoods(foods: [fdcId]!): User
    removeUser(_id: ID!): User


  // type Mutation {
  //  addFood(fdcId: Int!,
  //    description: String!,
  //    dataType: String!,
  //    publicationDate: String!,
  //    foodCode: String,
  //    nbdNumber: String,
  //    foodNutrients: [FoodNutrients]!): Food!
  }
`;

module.exports = typeDefs;
