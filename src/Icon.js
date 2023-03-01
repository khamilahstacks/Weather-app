import React, { useState } from "react";
import axios from "axios";

export default function Icon(props) {
  let [icon, setIcon] = useState(null);

  function showIcon(response) {
    setIcon(response.data.weather[0].icon);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=b6ca4253c79c3ef56a82a564e734f0ee&units=metric`;
  axios.get(url).then(showIcon);

  return (
    <img
      src={`http://openweathermap.org/img/w/${icon}.png`}
      alt="weather icon"
    />
  );
}
