import React from "react";
import "./weather.css";

export default function search() {
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

                <span className="temperature">1</span>
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
            <div className="forecast" class="row">
              <div class="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                6°C
              </div>
              <div class="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                1°C
              </div>
              <div class="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                3°C
              </div>
              <div class="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                9°C
              </div>
              <div class="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                6°C
              </div>
              <div class="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                8°C
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
