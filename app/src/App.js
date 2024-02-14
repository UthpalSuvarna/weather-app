import "./App.css";
import TopButtons from "./components/TopButtons";
import Search from "./components/Search";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";

function App() {
  return (
    <div className="mx-auto max-w-screen py-5 px-10 bg-slate-950">
      <TopButtons />
      <Search />
      <TimeAndLocation />
      <TempAndDetails />
    </div>
  );
}

export default App;
