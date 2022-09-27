import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <h2>
        <a href="https://github.com/Tolulopejay/react-weather" target="_blank">
          Open-source code
        </a>
        by Tolulope Johnson.
      </h2>
    </div>
  );
}

export default App;
