import { NavLink } from "react-router-dom";
import "./sass/_firstSection.scss";
import study from "./images/StudySection.jpg";
import calculatorOldMan from "./images/RetirementCalculator1.jpg";
import stockNewsSection from "./images/StockNewsSection.jpg";

export default function FirstSection(props) {
  if (props.navbarClass === "header2") {
    props.setNavbarClass("header3");
  }

  return (
    <div className="firstSection">
      <div className="titulContainer">
        <h1>SUCCESS IN ANY FIELD OF LIFE IS NOT DUE TO INBORN TRAITS</h1>
      </div>
      <div className="featureContainer">
        <NavLink to="/Stocks" className="contentFeatureContainer">
          <img src={stockNewsSection} alt="stockNewsSection" />
          <div className="textareaStockNews">
            <h2 className="titul">Stock News</h2>
          </div>
        </NavLink>
        <NavLink to="/Study" className="contentFeatureContainer">
          <img src={study} alt="study" />
          <div className="textareaStockNews">
            <h2 className="titul">Study Section</h2>
          </div>
        </NavLink>
      </div>
      <div className="featureContainer">
        <NavLink to="/RetirmentCalculator" className="contentFeatureContainer">
          <img src={calculatorOldMan} alt="calculatorOldMan" />
          <div className="textareaStockNews">
            <h2 className="titul">Retirement Calculator</h2>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
