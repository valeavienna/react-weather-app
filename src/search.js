import React, { useState } from "react";
import axios from "axios";
import Today from "./today";
import "./search.css";

function Search(props) {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  console.log(props.defaultCity);

  let apiKey = "559b6f96538ec8d21d1bda0faf9f705f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeather({
      ready: true,
      temp: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weather.ready) {
    return (
      <div className="Search">
        <Today weather={weather} />
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 newCity"
            type="search"
            placeholder="Search weather for new city"
            aria-label="Search"
            onChange={updateCity}
          />
          <input className="submit" type="submit" value="Search 🌍" />
          <input
            className="local"
            type="submit"
            value="Local Weather 🚩"
          />{" "}
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Search;
