
const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');

const client = new ApolloClient({
  uri: 'https://api.nal.usda.gov/fdc/v1/graphql',
  cache: new InMemoryCache()
});

export const GET_FOOD_BY_NAME = gql`
  query($description: String!) {
    foodByName(description: $description) {
      fdcId
      description
      dataType
      foodClass
      publicationDate
      brandOwner
      brandName
      servingSize
      servingSizeUnit
      ingredients
      foodNutrients {
        number
        name
        amount
        unitName

      }
    }`

 
client.query({
  query: GET_FOOD_BY_NAME,
  variables: { description: 'banana' },
})
  .then(result => console.log(result))
  .catch(error => console.error(error));

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

// export const QUERY_ALL_FOODS = gql`
//   query {
//     foods(description: $description) {
//       description
//       fdcId
//       dataType
//     }
//   }
// `;
export const QUERY_ALL_FOODS = gql`
query ($query: String) {
  foods(query: $query) {
    fdcId
    description
  }
}`

client.query({
  query: QUERY_ALL_FOODS,
  variables: { query: 'food' },
})
  .then(result => console.log(result))
  .catch(error => console.error(error));
