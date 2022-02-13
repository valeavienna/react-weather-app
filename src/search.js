import React from "react";

import "./search.css";

function Search() {
  return (
    <div className="Search">
      <form className="d-flex">
        <input
          className="form-control me-2 newCity"
          type="search"
          placeholder="Search weather for new city"
          aria-label="Search"
        />
        <input className="submit" type="submit" value="Search 🌍" />
        <input className="local" type="submit" value="Local Weather 🚩" />{" "}
      </form>
    </div>
  );
}

export default Search;
