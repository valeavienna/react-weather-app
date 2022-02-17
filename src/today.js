import React from "react";
import Date from "./date";
import Temperature from "./temperature";
import "./today.css";

function Today(props) {
  return (
    <div className="today">
      {" "}
      <div className="row container-weather-today">
        <div className="col-6 container-today">
          <div className="card weather-today">
            <div className="card-body today">
              <h3 className="cityNow">{props.weather.city}</h3>
              <h3 className="date">
                <Date date={props.weather.date} />
              </h3>
              <hr />
              <div className="row container data-today">
                <div className="col-6 day-temp">
                  <h5>Today</h5>
                  <h6>
                    <Temperature temp={props.weather.temp} />
                  </h6>
                </div>
                <div className="col-6 wind-description">
                  <h4 className="description">{props.weather.description}</h4>
                  <h4 className="wind">Wind: {props.weather.wind}km/h</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 icon-top weather-today-icon">
          <img className="icon-today" src={props.weather.icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Today;
