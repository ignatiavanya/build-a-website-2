import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";

const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    // Container
    <div className="flex flex-col h-screen bg-green-500">
      <City cityName={"Jakarta"} temp={"26°C"} color={"bg-yellow-200"} />
      <City cityName={"Tokyo"} temp={"2°C"} color={"bg-yellow-300"} />{" "}
      <City cityName={"London"} temp={"3°C"} color={"bg-yellow-400"} />
      <City cityName={"Seoul"} temp={"-12°C"} color={"bg-yellow-500"} />
      <City cityName={"Toronto"} temp={"3°C"} color={"bg-yellow-600"} />{" "}
      <City cityName={"Melbourne"} temp={"17°C"} color={"bg-yellow-700"} />
      <City cityName={"Tokyo"} temp={"10°C"} color={"bg-yellow-800"} />
    </div>
  );
}

export default Home;
