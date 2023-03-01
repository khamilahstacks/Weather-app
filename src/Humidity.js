import React, { useState } from "react";
import axios from "axios";

export default function Humidity(props) {
  let [humidity, setHumidity] = useState(null);

  function showHumidity(response) {
    setHumidity(response.data.main.humidity);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=b6ca4253c79c3ef56a82a564e734f0ee&units=metric`;
  axios.get(url).then(showHumidity);

  return `Humidity: ${humidity} %`;
}
