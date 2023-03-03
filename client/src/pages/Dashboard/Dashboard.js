import "./Dashboard.css";
import Searchbox from "../../components/Searchbox/Searchbox";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";
const Dashboard = () => {
  return (
    <div className="homeContainer">
      <div className="homeIntroduction">
        <Searchbox />
      </div>
    </div>
  );
};

export default Dashboard;
