import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./sass/_burgerMenu.scss";
import "./sass/_navbar.scss";

import stockAnalyzer from "./images/stock_analyzerWhite.png";
import stocks from "./images/stocksWhite.png";
import study from "./images/studyWhite.png";
import calculatorOldMan from "./images/calculatorOldManWhite.png";

export default function Navbar() {
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

  return (
    <div className="header">
      <div className={backBurger}>
        <div onClick={handleClick} id="nav-icon2" className={Burger}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={Style}>
        <div className="containerNav">
          <div className="menu">
            <NavLink to="/Stocks" onClick={handleClick} className="container">
              <span className="circle">
                <img src={stocks} />
              </span>
            </NavLink>
            <NavLink to="/Study" onClick={handleClick} className="container">
              <span className="circle">
                <img src={study} />
              </span>
            </NavLink>

            <NavLink
              to="/StocksAnalyzer"
              onClick={handleClick}
              className="container"
            >
              <span className="circle">
                <img src={stockAnalyzer} />
              </span>
            </NavLink>

            <NavLink
              to="/RetirmentCalculator"
              onClick={handleClick}
              className="container"
            >
              <span className="circle">
                <img src={calculatorOldMan} />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
