import DisplayWeather from "./components/DisplayWeather";
import SearchWeather from "./components/SearchWeather";
import { useState } from "react";

import "./App.css";

function App() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('')

  const handleChangeWeather = (weatherData, city) => {
    setWeather(weatherData)
    setCity(city)
  };

  return (
    <div className="App">
      <SearchWeather handleChangeWeather={handleChangeWeather} />
      <DisplayWeather weather={weather} city={city} />
    </div>
  );
}

export default App;
