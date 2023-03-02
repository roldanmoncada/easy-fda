const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tech {
    _id: ID!
    name: String!
  }

  type FoodNutrients {
    number: String
    name: String
    amount: Int
    unitName: String
    derivationCode: String
    derivationDescription: String
  }

  type Food {
    fdcId: Int
    description: String
    dataType: String
    publicationDate: String
    foodCode: String
    nbdNumber: String
    foodNutrients: [FoodNutrients] 
  }

  type Query {
    foods: [Food]
    FoodNutrients: [FoodNutrients]
  }

  type Mutation {
    addFood(fdcId: Int!,
      description: String!,
      dataType: String!,
      publicationDate: String!,
      foodCode: String,
      nbdNumber: String,
      foodNutrients: [FoodNutrients]!): Food!
  }
`;

module.exports = typeDefs;
