import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./sass/_burgerMenu.scss";
import "./sass/_navbar.scss";
import { HamburgerIcon } from "@chakra-ui/icons";

import stockAnalyzer from "./images/stock_analyzerWhite.png";
import stocks from "./images/stock_news.png";
import study from "./images/studyWhite.png";
import calculatorOldMan from "./images/calculatorOldManWhite.png";
import heartSVG from "./images/heartSVG.png";
import homeSVG from "./images/homeSVG.png";

export default function Navbar(props) {
  const [Active, IsActive] = useState("off");
  const [Style, setStyle] = useState("pushMenuHidden");
  const [backBurger, setBackBurger] = useState("headerContainerStart");
  const [Burger, setBurger] = useState("");

  const handleClick = () => {
    if (Active === "off") {
      IsActive("true");
      setStyle("pushMenuDown");
      setBurger("open");
      setBackBurger("headerContainerActive");
    } else {
      IsActive("off");
      setStyle("pushMenuHidden");
      setBurger("");
      setBackBurger("headerContainerUnActive");
    }
  };
  const handleClickSVG = () => {
    if (Active === "true") {
      IsActive("off");
      setStyle("pushMenuHidden");
      setBurger("");
      setBackBurger("headerContainerUnActive");
    }
  };

  return (
    <div className={props.navbarClass}>
      <div className={backBurger}>
        <NavLink onClick={handleClickSVG} to=".">
          <img className="iconSVG" src={homeSVG} alt="homeSVG" />
        </NavLink>

        <div onClick={handleClick} id="nav-icon1" className={Burger}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <NavLink onClick={handleClickSVG} to="/FavoriteStocks">
          <img className="iconSVG" src={heartSVG} alt="heartSVG" />
        </NavLink>
      </div>

      <div className={Style}>
        <div onClick={handleClickSVG} className="containerNav">
          <div className={props.menuClass}>
            <NavLink to="/Stocks" onClick={handleClick} className="container">
              <span className="circle">
                <img src={stocks} alt="stocks" />
              </span>
            </NavLink>

            <NavLink to="/Study" onClick={handleClick} className="container">
              <span className="circle">
                <img src={study} alt="study" />
              </span>
            </NavLink>

            <NavLink
              to="/StocksAnalyzer"
              onClick={handleClick}
              className="container"
            >
              <span className="circleUnactive">
                <img src={stockAnalyzer} alt="StocksAnalyzer" />
              </span>
            </NavLink>

            <NavLink
              to="/RetirmentCalculator"
              onClick={handleClick}
              className="container"
            >
              <span className="circle">
                <img src={calculatorOldMan} alt="calculatorOldMan" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
