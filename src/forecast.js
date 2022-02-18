import React, { useState } from "react";
import Forecastday from "./forecastday";
import "./forecast.css";
import axios from "axios";

function Forecast(props) {
  console.log(props);
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(forecast);
  }

  if (loaded) {
    return (
      <div className="Forecast container next-days-forecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7 && index > 0) {
              return <Forecastday data={dailyForecast} />;
            }
          })}
        </div>
      </div>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = "559b6f96538ec8d21d1bda0faf9f705f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
export default Forecast;
