import "./App.css";
import TopButtons from "./components/TopButtons";
import Search from "./components/Search";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="mx-auto max-w-screen py-5 px-10 bg-slate-950">
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
