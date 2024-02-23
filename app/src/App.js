import "./App.css";
import TopButtons from "./components/TopButtons";
import Search from "./components/Search";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/weatherServices";

function App() {
  const getFormattedData = async () => {
    const data = await getWeatherData({ q: "tokyo" });
    console.log(data);
  };

  getFormattedData();
  return (
    <div className="mx-auto max-w-screen py-5 px-1 bg-neutral-950">
      <TopButtons />
      <Search />
      <TimeAndLocation />
      <TempAndDetails />
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />
    </div>
  );
}

export default App;
