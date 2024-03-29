import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Stocks from "./Home/Stocks/Stocks.tsx";
import Study from "./Home/Study/Study";
import StocksAnalyzer from "./Home/StocksAnalyzer/StocksAnalyzer.tsx";
import RetirmentCalculator from "./Home/RetirmentCalculator/RetirmentCalculator.tsx";
import FirstSection from "./Home/FirstSection.js";
import Navbar from "./Home/Navbar";
import FavoriteStocks from "./Home/FavoriteStocks/FavoriteStocks.tsx";

const RouteSwitch = () => {
  const [navbarClass, setNavbarClass] = useState("header");
  const [menuClass, setMenuClass] = useState("menu2");

  useEffect(() => {
    if (navbarClass === "header2") {
      setMenuClass("menu2");
    } else {
      setMenuClass("menu");
    }
  }, [navbarClass]);

  return (
    <Router>
      <Navbar navbarClass={navbarClass} menuClass={menuClass} />

      <Routes>
        <Route
          path="/"
          element={
            <FirstSection
              navbarClass={navbarClass}
              setNavbarClass={setNavbarClass}
            />
          }
        />

        <Route
          path="/RetirmentCalculator"
          element={
            <RetirmentCalculator
              navbarClass={navbarClass}
              setNavbarClass={setNavbarClass}
            />
          }
        />

        <Route
          path="/Stocks"
          element={
            <Stocks
              navbarClass={navbarClass}
              setNavbarClass={(data) => setNavbarClass(data)}
            />
          }
        />

        <Route path="/StocksAnalyzer" element={<StocksAnalyzer />} />

        <Route
          path="/Study"
          element={
            <Study navbarClass={navbarClass} setNavbarClass={setNavbarClass} />
          }
        />

        <Route
          path="/FavoriteStocks"
          element={
            <FavoriteStocks
              navbarClass={navbarClass}
              setNavbarClass={setNavbarClass}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;
