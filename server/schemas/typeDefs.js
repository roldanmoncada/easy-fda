const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String! 
    password: String!
    savedFood:[Food]
  }
 

  type Food { 
    fdcId: ID!
    description: String
    dataType: String
    publicationDate: String
    foodNutrients: [FoodNutrients] 
  }

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
    me: User
    savedFood: [Food]
    foods: [Food]
    foodById( fdcId: ID): Food
    foodByName(description: String): Food
    nutrients: [FoodNutrients]
    nutrient(name: String, amount: Int, unitName: String): FoodNutrients
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
		login(email: String!, password: String!): Auth
    savedFood(fdcId: ID!, description: String!, dataType: String, publicationDate: String): User
    removeFood(fdcId: ID!, description: String!, dataType: String!, publicationDate: String!): User
     
    removeUser(_id: ID!): User


   
  }
   
`;

module.exports = typeDefs;
