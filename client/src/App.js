import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import { changeClassName } from "./Helper/changeClassName";
import { useState } from "react";
import { useQuery } from '@apollo/client';
import { QUERY_ME } from './utils/queries';
// import { QUERY_ALL_FOODS } from './utils/queries'

// import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  const [popUp, setPopUp] = useState(false);
// const {loading, error, data } = useQuery(QUERY_ME );
// if (loading) return null;
// if (error) return 'Error: ' + error;
// console.log(data)
  return (
 
    <changeClassName.Provider value={{ popUp, setPopUp }}>
      <div className="App">
        <Router>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
    </changeClassName.Provider>
   
  );
}

export default App;
