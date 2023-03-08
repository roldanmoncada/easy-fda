const { gql } = require("@apollo/client");

// const client = new ApolloClient({
//   uri: 'https://api.nal.usda.gov/fdc/v1/graphql',
//   cache: new InMemoryCache()
// });

// export const GET_FOOD_BY_NAME = gql`
//   query Query($description: String!) {
//     foodByName(description: $description) {
//       fdcId
//       description
//       dataType
//       foodClass
//       publicationDate
//       brandOwner
//       brandName
//       servingSize
//       servingSizeUnit
//       ingredients
//       foodNutrients {
//         number
//         name
//         amount
//         unitName

//       }
//     }
//   }
//   `;

export const QUERY_FOOD_BY_NAME = gql`
  query FoodByName($query: String!) {
    foodByName(query: $query) {
      fdcId
      description
      dataType
      brandOwner
      brandName
      servingSize
      servingSizeUnit
      ingredients
      foodNutrients {
        nutrientNumber
        nutrientId
        nutrientName
        unitName
      }
    }
  }
`;

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    email
    password
  }
}
`;

// {
  //   me {
  //     _id
  //     username
  //     email
  //     password
  //     savedFood {
  //       fdcId: Int
  //       description: String
  //       dataType: String
  //       publicationDate: String
  //     }
  //   }
  // }
//   foodNutrients: [FoodNutrients] --> threw an error on line 15

export const QUERY_ALL_FOODS = gql`
  query Query($query: String) {
    getFoods(query: $query) {
      fdcId
      description
    }
  }
`;
