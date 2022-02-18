import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import Footer from "./footer";

import "./index.css";

function App() {
  return (
    <div className="App container">
      {" "}
      <h1>Weather Forecast</h1>
      <Search defaultCity={"Port Louis"} />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
