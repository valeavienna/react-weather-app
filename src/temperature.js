import React, { useState } from "react";

function Temperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        <span className="temp">{props.temp}</span>
        <span className="units">
          ° C /
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let tempFahrenheit = (props.temp * 9) / 5 + 32;
    return (
      <div className="temperature">
        <span className="temp">{tempFahrenheit}</span>
        <span className="units">
          °
          <a href="/" className="celsius" onClick={showCelsius}>
            C
          </a>
          / F
        </span>
      </div>
    );
  }
}

export default Temperature;
