import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import { changeClassName } from "./Helper/changeClassName";
import { useState } from "react";

import { useQuery } from "@apollo/client";
// import { QUERY_ME } from './utils/queries';
import { QUERY_ALL_FOODS } from "./utils/queries";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [popUp, setPopUp] = useState(false);
  const { loading, error, data } = useQuery(QUERY_ALL_FOODS);
  if (loading) return null;
  if (error) return "Error: " + error;
  console.log(data);
  return (
    <ApolloProvider client={client}>
      <changeClassName.Provider value={{ popUp, setPopUp }}>
        <div className="App">
          <Router>
            <Navbar />
            <AnimatedRoutes />
            <Footer />
          </Router>
        </div>
      </changeClassName.Provider>
    </ApolloProvider>
  );
}

export default App;
