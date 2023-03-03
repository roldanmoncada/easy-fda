const Searchbox = () => {
  return (
    <form action="#">
      <div className="input-box">
        <span className="icon">
          <i className="fas fa-wheat-alt"></i>
        </span>
        <input type="searchbox" required />
        <label>Search the food</label>
      </div>
    </form>
  );
};

export default Searchbox;
