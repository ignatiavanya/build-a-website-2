import React, { useState, useEffect } from "react";
import axios from "axios";

import City from "../components/City";

function Home() {
  const [cities, setCities] = useState([
    {
      name: "Jakarta",
      currentTemp: "0",
      weatherType: "",
      color: "bg-blue-200",
    },
    {
      name: "Boston",
      currentTemp: "0",
      weatherType: "",
      color: "bg-blue-300",
    },
    {
      name: "Seattle",
      currentTemp: "0",
      weatherType: "",
      color: "bg-blue-400",
    },
    {
      name: "Seoul",
      currentTemp: "0",
      weatherType: "",
      color: "bg-blue-500",
    },
    {
      name: "Brisbane",
      currentTemp: "0",
      weatherType: "",
      color: "bg-blue-600",
    },
    {
      name: "Tokyo",
      currentTemp: "0",
      weatherType: "",
      color: "bg-blue-700",
    },
  ]);

  useEffect(() => {
    updateAllWeatherData();
  }, []);

  // Fetch the weather data for 1 city
  async function fetchWeatherData(cityName) {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        return weather;
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });

    return res;
  }

  // update the list data
  async function updateAllWeatherData(params) {
    cities.forEach(function (citiesItems, index) {
      let weatherData = {};
      let newCities = [...cities];

      fetchWeatherData(citiesItems.name).then((res) => {
        weatherData = res;

        newCities[index].currentTemp = weatherData.main.temp;
        newCities[index].weatherType = weatherData.weather[0].main;
        setCities(newCities);
      });
    });
  }

  return (
    // Container
    <div className="flex flex-col h-screen bg-white">
      <div className="text-4xl text-gray-800 font-sans font-semibold text-center my-4 bg-gray-300">
        Weather App
      </div>

      {cities.map((item, index) => (
        <City
          cityName={item.name}
          weatherType={item.weatherType}
          temp={item.currentTemp}
          color={item.color}
        />
      ))}
    </div>
  );
}

export default Home;
