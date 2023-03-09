import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import { changeClassName } from "./Helper/changeClassName";
import { useState } from "react";

 

function App() {
   const [popUp, setPopUp] = useState(false);
  // const { loading, error, data } = useQuery(QUERY_ALL_FOODS, {variables: {query: "food"}});
  // if (loading) return null;
  // if (error) return "Error: " + error;
  // console.log(data);
  return (
    // <ApolloProvider client={client}>
    <changeClassName.Provider value={{ popUp, setPopUp }}>
      <div className="App">
        <Router>
          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </div>
    </changeClassName.Provider>
    // </ApolloProvider>
  );
}

export default App;
