import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
