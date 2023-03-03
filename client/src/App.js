import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});
function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        {/* <Footer /> */}
      </Router>
    </div>
     </ApolloProvider>
  );
}

export default App;
