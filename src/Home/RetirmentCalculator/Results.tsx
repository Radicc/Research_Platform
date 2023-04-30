import React, { useState } from "react";
import { NewData } from "./RetirmentCalculator";
import { QuestionIcon } from "@chakra-ui/icons";

interface Props {
  defaultForm: NewData;
}

const Results = ({ defaultForm }: Props) => {
  const object = [
    {
      id: 1,
      h2: "Enough",
      p: defaultForm.Enough || "?",
      pClass: defaultForm.Enough === "Yes" ? "colorGreen" : "colorRed",
    },
    {
      id: 2,
      h2: "Saved",
      p:
        defaultForm.NormalSaveCal?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || 0,
    },
    {
      id: 3,
      h2: "Growth",
      p:
        defaultForm.GrowthCal?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || 0,
    },
    {
      id: 4,
      h2: "Balance",
      p:
        defaultForm.LastYearCal?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || 0,
    },
    {
      id: 5,
      h2: "Retirement Income",
      p:
        defaultForm.RetirementIncome?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || 0,
    },
    {
      id: 6,
      h2: "BalanceEnd",
      p:
        defaultForm.BalancedEnd?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        }) || 0,
      pClass: defaultForm.Enough === "Yes" ? "colorGreen" : "colorRed",
    },
  ];
  return (
    <>
      {object.map((item) => (
        <div key={item.id} className="containerSolution">
          <h2>{item.h2}</h2>
          <p className={item.pClass || ""}>{item.p}</p>
        </div>
      ))}
    </>
  );
};

export default Results;
