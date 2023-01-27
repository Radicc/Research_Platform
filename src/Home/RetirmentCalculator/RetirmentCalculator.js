import "./RetirmentCalculator.scss";
import "./_calculateButton.scss";

export default function RetirmentCalculator() {
  return (
    <div className="RetirmentCalculator">
      <div className="calculator">
        <h1>Retirment Calculator</h1>
        <div className="calculatorContainer">
          <div className="inputContainer">
            <input placeholder="Age" />
            <input placeholder="Retirement Age" />
            <input placeholder="Current savings" />
            <input placeholder="Annual Savings" />
            <input placeholder="% Increase of Annual Saving" />
          </div>
          <div className="inputContainer">
            <input placeholder="Annualized Returns" />
            <input placeholder="Annualized Returns During Retirement" />
            <input placeholder="What Age Do You Expect To Live To?" />
            <input placeholder="Inflation" />
            <input placeholder="Current Annual Income (before taxes)?" />
          </div>
        </div>
        <div className="inputContainer2">
          <input placeholder="What % of your income do you want to have in retirement?" />
        </div>
        <button type="submit" className="calculateButton">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Calculate
        </button>
      </div>
    </div>
  );
}
