import "./App.css";
import TopButtons from "./components/TopButtons";
import Search from "./components/Search";

function App() {
  return (
    <div className="mx-auto max-w-screen py-5 px-10 bg-slate-950">
      <TopButtons />
      <Search/>
    </div>
  );
}

export default App;
