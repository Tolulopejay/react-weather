import React, { useState } from "react";
import axios from "axios";
import React from "react";
import "./weather.css";

export default function search() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState([]);
  function handleResponse(response) {
    setTemperature(response.temperature.current);

    setReady(true);
  }
  if (ready) {
    return (
      <div className="search">
        <form className="form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                Value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div class="container text-center">
              <div class="row">
                <div class="col-9">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Mostly Cloudy"
                  />

                  <span className="temperature">{Math.round(temperature)}</span>
                  <span className="unit">°C</span>
                </div>

                <div class="col-3">
                  <ul>
                    <li>Precipitation</li>
                    <li>Humidity</li>
                    <li>Wind</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "f07b7ba26fba0ta36115d5o743fd2a10";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading.....";
  }
}
