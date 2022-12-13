import React from "react";

import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Augusta",
    date: "November 11",
    time: "6:30",
    imageURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    weatherDescription: "Partly Cloudy",
    temp: 30,
    humidity: 0,
    wind: 3,
  };
  return (
    <div className="weather-app">
      <h1>
        <div className="row">
          <div className="col-5">
            <ul>
              <li>
                <span className="todayDate">
                  {" "}
                  Last Updated: {weatherData.date},
                </span>
                <span className="time"> {weatherData.time}</span>
              </li>
              <li>
                <span className="weatherLocation">{weatherData.city}</span>
              </li>
            </ul>
          </div>

          <div className="col-7">
            <form id="search-form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search a City"
                  id="city-input"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    value="search"
                  >
                    Search
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="useLocation-button"
                  >
                    Use my Location
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </h1>
      <h2>
        <div className="row">
          <div className="col-md-3">
            <img
              src={weatherData.imageURL}
              alt={weatherData.weatherDescription}
              width="100"
            />
          </div>
          <div className="col-md-5">
            <p className="current-temp">
              <strong>
                Current: <span className="temperature">{weatherData.temp}</span>
                <a href="/" className="active">
                  °F{" "}
                </a>{" "}
                |<a href="/">°C</a>
              </strong>
            </p>

            <p className="card-text">
              <small>{weatherData.weatherDescription}</small>
            </p>
          </div>
          <div className="col-md-4">
            <p>
              Humidity:{" "}
              <span className="mainHumidity">{weatherData.humidity}</span>%
            </p>

            <p>
              Wind: <span className="mainWind">{weatherData.wind}</span> mph
            </p>
          </div>
        </div>
      </h2>

      <footer>
        <a
          href="https://github.com/brittrumery"
          target="_blank"
          rel="noreferrer"
        >
          Coded by Britt Rumery
        </a>
      </footer>
    </div>
  );
}
