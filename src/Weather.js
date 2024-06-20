import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "e6c2364656962bdcb16bc352fc42569a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-80"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
        <div>
          <footer>
            This project was coded by{" "}
            <a
              href="https://github.com/GloryEvi"
              target="_blank"
              rel="noreferrer"
            >
              Glory Evi
            </a>{" "}
            open-sourced on{" "}
            <a
              href="https://github.com/GloryEvi/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://e-react-weather-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
    return (
      <ThreeDots
        type="ThreeDots"
        height={80}
        width={80}
        color="#0b5ed7"
        timeout={3000}
        radius={9}
      />
    );
  }
}
