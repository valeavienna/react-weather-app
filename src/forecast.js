import React from "react";
import "./forecast.css";

function Forecast() {
  return (
    <div className="Forecast container next-days-forecast">
      <div className="row">
        <div className="col-2 rounded">
          <h3 className="weekday">Monday</h3>
          <img
            className="forecast-icon"
            src="http://openweathermap.org/img/wn/01d@2x.png"
          ></img>
          <h4 className="temp-forecast">
            <span className="max-forecast">25° </span>
            <span className="min-forecast"> 19°</span>{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Forecast;
