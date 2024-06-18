import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Wed</div>
          <WeatherIcon code="04d" size={40} />
          <div>
            <span className="max-temperature">19°</span>
            <span className="min-temperature">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
