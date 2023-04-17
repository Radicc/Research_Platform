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
        <p>
          {defaultForm.NormalSaveCal?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }) || 0}
        </p>
      </div>

      <div className="containerSolution">
        <h2>Growth</h2>
        <p>
          {defaultForm.GrowthCal?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }) || 0}
        </p>
      </div>

      <div className="containerSolution">
        <h2>Balance ( {defaultForm.RetirementAge || "?"} yo )</h2>
        <p>
          {defaultForm.LastYearCal?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }) || 0}
        </p>
      </div>

      <div className="containerSolution">
        <h2>Retirement Income</h2>
        <p>
          {defaultForm.RetirementIncome?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }) || 0}
        </p>
      </div>

      <div className="containerSolution">
        <h2>BalanceEnd ( {defaultForm.ExpectToLive || "?"} yo )</h2>
        <p>
          {defaultForm.BalancedEnd?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          }) || 0}
        </p>
      </div>
    </>
  );
};

export default Results;
