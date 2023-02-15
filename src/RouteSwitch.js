import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Stocks from "./Home/Stocks/Stocks";
import Study from "./Home/Study/Study";
import StocksAnalyzer from "./Home/StocksAnalyzer/StocksAnalyzer";
import RetirmentCalculator from "./Home/RetirmentCalculator/RetirmentCalculator";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import FavoriteStocks from "./Home/FavoriteStocks/FavoriteStocks";

const RouteSwitch = () => {
  const [navbarClass, setNavbarClass] = useState("header");
  console.log(navbarClass);

  return (
    <Router>
      <Navbar navbarClass={navbarClass} />
      <Routes>
        <Route path="/Research_Platform" element={<Home />} />
        <Route path="/RetirmentCalculator" element={<RetirmentCalculator />} />
        <Route path="/Stocks" element={<Stocks />} />
        <Route path="/StocksAnalyzer" element={<StocksAnalyzer />} />
        <Route
          path="/Study"
          element={
            <Study navbarClass={navbarClass} setNavbarClass={setNavbarClass} />
          }
        />
        <Route path="/FavoriteStocks" element={<FavoriteStocks />} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
