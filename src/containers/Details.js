import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import WeatherImage from "../components/WeatherImage";
import "../App.css";

// TODO
// - implement API
// - add props to details screen
// - style the details screen

function Details() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_WEATHER_KEY);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.log(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("name");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
      highTemp = `${Math.round(weatherData.main.temp_max)}°C`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${Math.round(weatherData.main.temp_min)}°C`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} mph`;
    }

    return {
      cloudiness,
      currentTemp,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  return (
    // Container
    <div className="flex flex-col flex-between items-center h-screen bg-gradient-to-r from-yellow-300 via-red-300 to-pink-500">
      <div className="p-8 text-2xl font-bold">
        Weather in <span>{city}</span>
      </div>

      <div className="flex flex-col p-8 m-4 border-2 rounded-md border-gray-700 items-center">
        <WeatherImage weatherType={weatherType} className="text-xl" />
        <div className="font-bold">{weatherType}</div>
        <br></br>
        <div>CURRENT TEMPERATURE : </div>
        <div className="text-4xl">{currentTemp}</div>
      </div>
      <div class="flex flex-col p-8 m-4 border-2 rounded-md border-gray-700 items-center">
        <div className="text-base">HIGH TEMPERATURE : </div>
        <div className="text-4xl">{highTemp}</div>

        <div className="text-base">LOW TEMPERATURE : </div>
        <div className="text-4xl">{lowTemp}</div>
      </div>

      <div class="flex flex-col p-8 m-4 border-2 rounded-md border-gray-700 items-center">
        <div className="text-base">CLOUDINESS : </div>
        <div className="text-4xl">{cloudiness}</div>

        <div className="text-base">HUMIDITY : </div>
        <div className="text-4xl">{humidity}</div>

        <div className="text-base">WIND SPEED : </div>
        <div className="text-4xl">{windSpeed}</div>
      </div>
    </div>
  );
}

export default Details;
