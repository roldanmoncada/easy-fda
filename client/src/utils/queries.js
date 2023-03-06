const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');

const client = new ApolloClient({
  uri: 'https://api.nal.usda.gov/fdc/v1/graphql',
  cache: new InMemoryCache()
});

const GET_FOOD_BY_NAME = gql`
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
    }
  }
`;

client.query({
  query: GET_FOOD_BY_NAME,
  variables: { description: 'banana' },
})
  .then(result => console.log(result))
  .catch(error => console.error(error));