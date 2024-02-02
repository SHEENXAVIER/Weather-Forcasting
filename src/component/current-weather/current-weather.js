import "./current-weather.css";
import React, { useState } from "react";

const CurrentWeather = ({ data }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };

  const temperatureValue = isCelsius
    ? Math.round(data.main.temp) + "°C"
    : Math.round(convertToFahrenheit(data.main.temp)) + "°F";

  const feelsLikeValue = isCelsius
    ? Math.round(data.main.feels_like) + "°C"
    : Math.round(convertToFahrenheit(data.main.feels_like)) + "°F";

  return (
    <div className="weather">
      <div className="top">
        <div>
          <div className="country-city">
            <p className="city">{data.city}</p>
            <p className="country">{data.sys.country}</p>
          </div>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`/icons/${data.weather[0].icon}.png`} />
      </div>
      <button onClick={toggleTemperatureUnit}>
        {isCelsius ? "Switch to Fahrenheit" : "Switch to Celsius"}
      </button>
      <div className="bottom">
        <p className="temperature">{temperatureValue}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-lebel">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-lebel">Feels Like</span>
            <span className="parameter-value">{feelsLikeValue}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-lebel">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-lebel">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-lebel">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
