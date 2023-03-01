import React, { useState } from "react";
import axios from "axios";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=b6ca4253c79c3ef56a82a564e734f0ee&units=metric`;
  axios.get(url).then(showTemperature);

  return `Temperature: ${Math.round(temperature)}°C`;
}
