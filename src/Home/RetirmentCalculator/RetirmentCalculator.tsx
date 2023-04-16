import React, { useState } from "react";
import Inputs from "./Inputs.tsx";
import Math from "./Math.ts";
import Results from "./Results.tsx";

import "./RetirmentCalculator.scss";
import "./_calculateButton.scss";

export interface Data {
  Age: number;
  RetirementAge: number;
  CurrentSavings: number;
  MonthlySavings: number;
  IncreaseOfAnnualSaving: number;
  AnnualizedReturns: number;
  ExpectToLive: number;
  Inflation: number;
  CurrentMonthlyIncome: number;
  IncomeInRetirement: number;
}

export interface NewData {
  RetirementAge: number;
  ExpectToLive: number;
  NormalSaveCal: number;
  LastYearCal: number;
  GrowthCal: number;
  RetirementIncome: number;
  BalancedEnd: number;
  Enough: string;
}

const RetirmentCalculator = () => {
  const [data, setData] = useState<Data>({} as Data);
  const [isSubmited, setSubmited] = useState(false);
  const [newData, setNewData] = useState<NewData>({} as NewData);

  if (isSubmited) {
    setNewData(Math(data));
    setSubmited(false);
  }

  return (
    <div className="RetirmentCalculator">
      <div className="calculator">
        <h1>Retirment Calculator</h1>
        <Inputs
          onSubmit={(data) => {
            setData(data);
            setSubmited(true);
          }}
        />
      </div>

      <div className="submitSolution">
        <div className="solution">
          <Results defaultForm={newData} />
        </div>
      </div>
    </div>
  );
};

export default RetirmentCalculator;
