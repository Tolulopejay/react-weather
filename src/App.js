import React from "react";

import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <footer>
        <a
          href="https://github.com/Tolulopejay/react-weather"
          rel="noreferrer"
          target="_blank"
        >
          Open-source code
        </a>
        {"  "} by Tolulope Johnson.
      </footer>
    </div>
  );
}

export default App;
