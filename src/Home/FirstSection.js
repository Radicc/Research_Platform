import { NavLink } from "react-router-dom";
import "./sass/_firstSection.scss";
import wallstreet_3 from "./images/wallstreet_3.jpg";
import study from "./images/StudySection.jpg";
import calculatorOldMan from "./images/RetirementCalculator1.jpg";

export default function FirstSection() {
  return (
    <div className="firstSection">
      <div className="titulContainer">
        <h1>SUCCESS IN ANY FIELD OF LIFE IS NOT DUE TO INBORN TRAITS</h1>
      </div>
      <div className="featureContainer">
        <NavLink to="/Study" className="contentFeatureContainer">
          <img src={study} />
        </NavLink>
        <NavLink to="/RetirmentCalculator" className="contentFeatureContainer">
          <img src={calculatorOldMan} />
        </NavLink>
      </div>
    </div>
  );
}
