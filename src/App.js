import React, { useState } from "react";
import Temperature from "./Temperature";
import Description from "./Description";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Icon from "./Icon";
import "./styles.css";

export default function App() {
  let [city, setCity] = useState();
  let [message, setMessage] = useState();
  let [loaded, setLoaded] = useState(false);
  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city"
        onChange={updateCity}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
  let weatherList = (
    <ul>
      <li>
        <Temperature place={city} />
      </li>
      <li>
        <Description place={city} />
      </li>
      <li>
        <Humidity place={city} />
      </li>
      <li>
        <Wind place={city} />
      </li>
      <li>
        <Icon place={city} />
      </li>
    </ul>
  );

  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);
    setMessage(`The current weather conditions in ${city} are:`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loaded) {
    return (
      <div className="App">
        <h1>Weather App</h1>
        {form}
        <p>{message}</p>
        {weatherList}
        <div className="info">
          <a
            href="https://github.com/khamilahstacks/React-app.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <p> by Oleksandra Khoroshko</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Weather App</h1>
        {form}
        <div className="info">
          <a
            href="https://github.com/OleksandraKhoroshko/project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          <p> by Khamilah Prevost</p>
        </div>
      </div>
    );
  }
}
