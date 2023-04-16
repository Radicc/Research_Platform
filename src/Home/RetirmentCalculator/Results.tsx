import React, { useState } from "react";
import { NewData } from "./RetirmentCalculator";

interface Props {
  defaultForm: NewData;
}

const Results = ({ defaultForm }: Props) => {
  return (
    <>
      <div className="containerSolution">
        <h2>Enough</h2>
        <p className={defaultForm.Enough === "Yes" ? "colorGreen" : "colorRed"}>
          {defaultForm.Enough || "?"}
        </p>
      </div>

      <div className="containerSolution">
        <h2>Saved</h2>
        <p>${defaultForm.NormalSaveCal?.toFixed(0) || 0}</p>
      </div>

      <div className="containerSolution">
        <h2>Growth</h2>
        <p>${defaultForm.GrowthCal?.toFixed(0) || 0}</p>
      </div>

      <div className="containerSolution">
        <h2>Balance ( {defaultForm.RetirementAge || "?"} yo )</h2>
        <p>${defaultForm.LastYearCal?.toFixed(0) || 0}</p>
      </div>

      <div className="containerSolution">
        <h2>RetirementIncome</h2>
        <p>${defaultForm.RetirementIncome?.toFixed(0) || 0}</p>
      </div>

      <div className="containerSolution">
        <h2>BalanceEnd ( {defaultForm.ExpectToLive || "?"} yo )</h2>
        <p>${defaultForm.BalancedEnd?.toFixed(0) || 0}</p>
      </div>
    </>
  );
};

export default Results;
