import "./Searchbox.css";

const Searchbox = () => {
  return (
    <form action="#">
      <div className="input-dashboard">
        <span className="icon">
          <i className="fas fa-wheat-alt"></i>
        </span>
        <input type="searchbox" required />
        <label>Search the food</label>

        <button className="searchBtn">Search </button>
      </div>
    </form>
  );
};

export default Searchbox;
