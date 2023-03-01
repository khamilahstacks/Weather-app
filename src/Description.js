import React, { useState } from "react";
import axios from "axios";

export default function Description(props) {
  let [description, setDescription] = useState(null);

  function showDescription(response) {
    setDescription(response.data.weather[0].description);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=b6ca4253c79c3ef56a82a564e734f0ee&units=metric`;
  axios.get(url).then(showDescription);

  return `Description: ${description}`;
}
