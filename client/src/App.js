import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";
import { changeClassName } from "./Helper/changeClassName";
import { useState } from "react";

// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

function App() {
  const [popUp, setPopUp] = useState(false);

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
    //{" "}
    // </ApolloProvider>
  );
}

export default App;
