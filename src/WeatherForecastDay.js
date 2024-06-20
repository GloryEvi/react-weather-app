import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="custom">
      <div className="forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="weatherForecastTemperatures">
        <span className="max-temperature">{maxTemperature()}</span>
        <span className="min-temperature">{minTemperature()}</span>
      </div>
    </div>
  );
}
