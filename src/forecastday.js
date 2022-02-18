import React from "react";
import "./forecast.css";

function Forecastday(props) {
  console.log(props);
  let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="col-sm-4 col-lg-2 rounded">
      <h3 className="weekday">{day()}</h3>
      <img className="forecast-icon" src={iconUrl} alt=""></img>
      <h4 className="temp-forecast">
        <span className="max-forecast">
          {Math.round(props.data.temp.max)}°{" "}
        </span>
        <span className="min-forecast">
          {" "}
          {Math.round(props.data.temp.min)}°
        </span>{" "}
      </h4>
    </div>
  );
}

export default Forecastday;
