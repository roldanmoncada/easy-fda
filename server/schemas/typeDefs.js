const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String! 
    password: String!
    savedFood:Food
  }
 
  type Query {
    me: User
    savedFood: [Food]
    foods(
      query: String
      dataType: String
      pageNumber: Int
      pageSize: Int
      sortBy: String
      sortOrder: String
      ): [Food]
    foodById(fdcId: ID!): Food
    foodByName(description: String!): Food
  }

  type Food { 
    fdcId: ID!
    description: String!
    dataType: String
    foodClass: String
    publicationDate: String
    brandOwner: String
    brandName: String
    servingSize: Float
    servingSizeUnit: String
    ingredients: String!
    foodNutrients: [FoodNutrients] 
  }

    type FoodNutrients {
      number: String
      name: String
      amount: Int
      unitName: String   
    }

    type Auth {
      token: ID!
      user: User
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
