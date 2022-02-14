import React from "react";
import ReactDOM from "react-dom";
import Today from "./today";
import Search from "./search";
import Footer from "./footer";

import "./styles.css";

function App() {
  return (
    <div className="App container">
      {" "}
      <h1>Weather Forecast</h1>
      <Today />
      <Search />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
