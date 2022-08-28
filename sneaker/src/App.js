import "./App.css";
import SearchBar from "./Components/SearchBar";
import SneakerData from "./Data.json";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder="Enter a Sneaker Name..." data={SneakerData} />
    </div>
  );
}

export default App;
