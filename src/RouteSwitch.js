import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stocks from "./Home/Stocks/Stocks";
import Study from "./Home/Study/Study";
import StocksAnalyzer from "./Home/StocksAnalyzer/StocksAnalyzer";
import RetirmentCalculator from "./Home/RetirmentCalculator/RetirmentCalculator";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";

const RouteSwitch = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RetirmentCalculator" element={<RetirmentCalculator />} />
        <Route path="/Stocks" element={<Stocks />} />
        <Route path="/StocksAnalyzer" element={<StocksAnalyzer />} />
        <Route path="/Study" element={<Study />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
