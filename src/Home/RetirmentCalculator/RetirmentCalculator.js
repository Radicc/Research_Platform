import "./RetirmentCalculator.scss";
import "./_calculateButton.scss";
import { useState, useRef } from "react";

export default function RetirmentCalculator() {
  const defaultForm = {
    Age: 0,
    RetirementAge: 0,
    CurrentSavings: 0,
    AnnualSavings: 0,
    IncreaseOfAnnualSavings: 0,
    AnnualizedReturns: 0,
    AnnualizedReturnsRetirement: 0,
    AgeOfDeath: 0,
    Inflation: 0,
    CurrentAnnualIncome: 0,
    IncomeInRetirement: 0,

    Enough: "YES",
    Save: 0,
    Growth: 0,
    Balance: 0,
    BalanceEnd: 0,

    RetirementIncome: 0,
  };
  const [genState, setState] = useState(defaultForm);

  const handleInput = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBalance = () => {
    let yearsToDeath = 0;
    let endBalance = 0;
    let number1 = Math.round(
      Number(genState.AnnualSavings) +
        Number(genState.CurrentSavings) +
        Number(genState.AnnualizedReturns / 100) *
          Number(genState.CurrentSavings)
    );
    //let number2 = Number(genState.CurrentSavings);
    let number0 = 0;
    let growth = 0;
    let EndNumber = [];
    let NormalSaving = Number(genState.CurrentSavings);
    let AnnualSavings = Number(genState.AnnualSavings);
    let RetirmentIncome = genState.CurrentAnnualIncome;
    let RetirmentIncomeStart = 0;

    ////////////////////////////////GOOD///////////////////////////////////
    for (let i = genState.Age; i < genState.RetirementAge; i++) {
      growth = 0;
      /*console.log(
        `${Number(number0).toFixed(0)} +${Number(number1).toFixed(
          0
        )} = ${Number(number0 + number1).toFixed(0)}`
      );
*/
      //console.log(`number0:${number0}`);
      NormalSaving += Math.round(
        Number(
          (genState.IncreaseOfAnnualSavings / 100) * AnnualSavings +
            Number(AnnualSavings)
        )
      );
      //console.log(`number 0 : ${number0.toFixed(0)}`);

      //console.log(`growth : ${growth.toFixed(0)}`);

      number1 = Math.round(
        Number(genState.AnnualizedReturns / 100) * number1 + number1
      );
      number1 += AnnualSavings;

      if (genState.IncreaseOfAnnualSavings != 0) {
        AnnualSavings += Math.round(
          Number(genState.IncreaseOfAnnualSavings / 100) * Number(AnnualSavings)
        );
      }
      console.log(`number 1 : ${number1}`);
      console.log(`AnnualSavings : ${AnnualSavings}`);
      //console.log(`growth : ${growth.toFixed(0)}`);
    }
    EndNumber.push(Number(NormalSaving));
    EndNumber.push(Number(number1));

    EndNumber.push(Number(number1 - NormalSaving));

    for (let i = genState.Age; i < genState.AgeOfDeath; i++) {
      RetirmentIncome = Math.round(
        Number((genState.Inflation / 100) * RetirmentIncome) +
          Number(RetirmentIncome)
      );

      if (i == genState.RetirementAge) {
        RetirmentIncomeStart = RetirmentIncome;
      }
    }
    console.log(`RetirmentIncome : ${RetirmentIncome}`);
    console.log(`RetirmentIncomeStart : ${RetirmentIncomeStart}`);
    EndNumber.push(RetirmentIncomeStart);

    ////////////////////////////////////////////////////////////

    yearsToDeath = Number(genState.AgeOfDeath - genState.RetirementAge);
    //console.log(yearsToDeath);
    endBalance = Number(number1);

    for (let i = 0; i < yearsToDeath; i++) {
      endBalance -= RetirmentIncome;
    }

    if (endBalance < 0) {
      EndNumber.push(endBalance);
      EndNumber.push("NO");
    } else {
      EndNumber.push(endBalance);
      EndNumber.push("YES");
    }

    return EndNumber;
  };

  const handleSubmit = () => {
    let number = [];
    number.push(...handleBalance());
    //console.log(`Number:${number}`);
    setState((prev) => ({
      ...prev,
      Save: number[0],
      Balance: number[1],
      Growth: number[2],
      RetirementIncome: number[3],
      BalanceEnd: number[4],
      Enough: number[5],
    }));
  };
  return (
    <div className="RetirmentCalculator">
      <div className="calculator">
        <h1>Retirment Calculator</h1>
        <div className="calculatorContainer">
          <div className="inputContainer">
            <div className="inputBlock">
              <p>Age</p>
              <input
                type="text"
                placeholder="0"
                name="Age"
                onChange={handleInput}
              />
            </div>
            <div className="inputBlock">
              <p>Retirement Age</p>
              <input
                type="text"
                placeholder="0"
                name="RetirementAge"
                onChange={handleInput}
              />
            </div>
            <div className="inputBlock">
              <p>Current savings</p>
              <input
                type="text"
                placeholder="0$"
                name="CurrentSavings"
                onChange={handleInput}
              />
            </div>

            <div className="inputBlock">
              <p>Annual Savings</p>
              <input
                type="text"
                placeholder="0$"
                name="AnnualSavings"
                onChange={handleInput}
              />
            </div>

            <div className="inputBlock">
              <p>% Increase of Annual Saving</p>
              <input
                placeholder="0%"
                name="IncreaseOfAnnualSavings"
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="inputContainer">
            <div className="inputBlock">
              <p>Annualized Returns</p>
              <input
                placeholder="0%"
                name="AnnualizedReturns"
                onChange={handleInput}
              />
            </div>
            <div className="inputBlock">
              <p>Annualized Returns During Retirement</p>
              <input
                placeholder="0%"
                name="AnnualizedReturnsRetirement"
                onChange={handleInput}
              />
            </div>

            <div className="inputBlock">
              <p>What Age Do You Expect To Live To?</p>
              <input placeholder="0" name="AgeOfDeath" onChange={handleInput} />
            </div>

            <div className="inputBlock">
              <p>Inflation</p>
              <input placeholder="0%" name="Inflation" onChange={handleInput} />
            </div>

            <div className="inputBlock">
              <p>Current Annual Income (before taxes)?</p>
              <input
                placeholder="0$"
                name="CurrentAnnualIncome"
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className="inputContainer2">
          <div className="inputBlock">
            <p>What % of your income do you want to have in retirement?</p>
            <input
              placeholder="0%"
              name="IncomeInRetirement"
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="buttonContainer">
          <button
            onClick={handleSubmit}
            type="submit"
            className="calculateButton"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Calculate
          </button>
        </div>
      </div>
      <div className="submitSolution">
        <div className="containerSolution">
          <h2>RETIREMENT?</h2>
          <p>{genState.Enough}</p>
        </div>
        <div className="containerSolution">
          <h2>GROWTH</h2>
          <p>$ {genState.Growth}</p>
        </div>
        <div className="containerSolution">
          <h2>SAVE</h2>
          <p>$ {genState.Save}</p>
        </div>
        <div className="containerSolution">
          <h2>BALANCE {genState.RetirementAge}y.o</h2>
          <p>$ {genState.Balance}</p>
        </div>
        <div className="containerSolution">
          <h2>Retirement Income</h2>
          <p>$ {genState.RetirementIncome}</p>
        </div>
        <div className="containerSolution">
          <h2>BALANCE {genState.AgeOfDeath}y.o</h2>
          <p>$ {genState.BalanceEnd}</p>
        </div>
      </div>
    </div>
  );
}
