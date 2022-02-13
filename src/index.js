import React from "react";
import ReactDOM from "react-dom";
import Today from "./today";
import Search from "./search";

import "./styles.css";

function App() {
  return (
    <div className="App">
      {" "}
      <h1>Weather Forecast</h1>
      <Today />
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
