import "./App.scss";
import RouteSwitch from "./RouteSwitch";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";

function App() {
  return (
    <div className="App">
      <RouteSwitch />

      <Home />
    </div>
  );
}

export default App;
