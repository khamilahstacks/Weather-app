import React, { useState } from "react";
import axios from "axios";

export default function Wind(props) {
  let [wind, setWind] = useState(null);

  function showWind(response) {
    setWind(response.data.wind.speed);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=b6ca4253c79c3ef56a82a564e734f0ee&units=metric`;
  axios.get(url).then(showWind);

  return `Wind: ${Math.round(wind)} m/s`;
}
