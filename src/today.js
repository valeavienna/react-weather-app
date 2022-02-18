import React from "react";
import Date from "./date";
import Temperature from "./temperature";
import "./today.css";
import "./index.css";

function Today(props) {
  return (
    <div className="Today">
      {" "}
      <div className="row container-weather-today">
        <div className="col-md-8 col-lg-6 container-today">
          <div className="card weather-today">
            <div className="card-body today">
              <h3 className="cityNow">
                <strong>{props.weather.city}</strong>
              </h3>
              <hr />
              <h3 className="date">
                <Date date={props.weather.date} />
              </h3>

              <div className="row container data-today">
                <div className="col-sm-6 day-temp">
                  <h6>
                    <Temperature temp={props.weather.temp} />
                  </h6>
                </div>
                <div className="col-sm-6 wind-description">
                  <h4 className="description">{props.weather.description}</h4>
                  <h4 className="wind">Wind: {props.weather.wind}km/h</h4>
                  <h4>Humidity: {props.weather.humidity} %</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-6 d-none d-md-flex icon-top weather-today-icon">
          <img className="icon-today" src={props.weather.icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Today;
