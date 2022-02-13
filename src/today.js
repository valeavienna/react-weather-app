import React from "react";

import "./today.css";

function Today() {
  return (
    <div className="today">
      {" "}
      <div className="row container-weather-today">
        <div className="col-6 container-today">
          <div className="card weather-today">
            <div className="card-body today">
              <h3 className="cityNow">Vienna</h3>
              <h4 className="header">Weather Report</h4>
              <hr />
              <div className="row container data-today">
                <div className="col-6 day-temp">
                  <h5>Today</h5>
                  <h6>
                    <span className="temp">5</span>
                    <span className="units">
                      °
                      <a href="/" className="celsius non-active">
                        C
                      </a>
                      /
                      <a href="/" className="fahrenheit">
                        F
                      </a>
                    </span>
                  </h6>
                </div>
                <div className="col-6 wind-description">
                  <h4 className="description">Sunny</h4>
                  <h4 className="wind">Wind: 24km/h</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 icon-top weather-today-icon">
          <img className="icon-today" src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Today;
