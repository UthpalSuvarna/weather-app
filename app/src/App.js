import "./App.css";
import TopButtons from "./components/TopButtons";
import Search from "./components/Search";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherServices";
import {useState, useEffect } from "react";

function App() {
  const [query, setQuery] = useState({ q: "mangaluru" });
  const [units, setUnits] = useState("metric");
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData({ ...query, units }).then(
        (data) => {
          setWeatherData(data);
        }
      );
    };

    fetchWeatherData();
  }, [query, units]);
  return (
    <div className="mx-auto max-w-screen py-5 px-1 bg-zinc-950">
      <TopButtons setQuery={setQuery}/>
      <Search setQuery={setQuery} units={units} setUnits={setUnits}/>
      {weatherData && (
        <div>
          <TimeAndLocation weather={weatherData} />
          <TempAndDetails weather={weatherData}/>
          <Forecast title="Hourly Forecast" />
          <Forecast title="Daily Forecast" />
        </div>
      )}
    </div>
  );
}

export default App;
