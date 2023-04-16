import React from "react";
import { Path, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./_calculateButton.scss";

const inputs = [
  {
    id: 1,
    title: "Age",
    schemaName: "Age",
    info: "",
    placeholder: "0",
  },
  {
    id: 2,
    title: "Retirement Age",
    schemaName: "RetirementAge",
    info: "",
    placeholder: "0",
  },
  {
    id: 3,
    title: "Current Savings",
    schemaName: "CurrentSavings",
    info: "",
    placeholder: "0",
  },
  {
    id: 4,
    title: "Monthly Savings",
    schemaName: "MonthlySavings",
    info: "",
    placeholder: "0",
  },
  {
    id: 5,
    title: "% Increase of Annual Saving",
    schemaName: "IncreaseOfAnnualSaving",
    info: "",
    placeholder: "0",
  },
  {
    id: 6,
    title: "Annualized Returns",
    schemaName: "AnnualizedReturns",
    info: "",
    placeholder: "0",
  },
  {
    id: 7,
    title: "What Age Do You Expect To Live To?",
    schemaName: "ExpectToLive",
    info: "",
    placeholder: "0",
  },
  {
    id: 8,
    title: "Inflation",
    schemaName: "Inflation",
    info: "",
    placeholder: "0",
  },
  {
    id: 9,
    title: "Current Monthly Income ?",
    schemaName: "CurrentMonthlyIncome",
    info: "",
    placeholder: "0",
  },
  {
    id: 10,
    title: "Income in retirement (%)",
    schemaName: "IncomeInRetirement",
    info: "",
    placeholder: "0",
  },
];

const schema = z.object({
  Age: z.number({ invalid_type_error: "Age is required" }).min(0),
  RetirementAge: z
    .number({ invalid_type_error: "Retirement Age is required" })
    .min(0, { message: "Number must be positive" }),
  CurrentSavings: z
    .number({ invalid_type_error: "Current Savings is required" })
    .min(0, { message: "Number must be positive" }),
  MonthlySavings: z
    .number({ invalid_type_error: "Annual Savings is required" })
    .min(0, { message: "Number must be positive" }),
  IncreaseOfAnnualSaving: z
    .number({ invalid_type_error: "Increase Of AnnualSaving is required" })
    .min(0, { message: "Number must be positive" }),
  AnnualizedReturns: z
    .number({ invalid_type_error: "Annualized Returns is required" })
    .min(0, { message: "Number must be positive" }),
  ExpectToLive: z
    .number({ invalid_type_error: "Expect To Live is required" })
    .min(0, { message: "Number must be positive" }),
  Inflation: z.number({ invalid_type_error: "Inflation is required" }).min(0),
  CurrentMonthlyIncome: z
    .number({ invalid_type_error: "Current Monthly Income is required" })
    .min(0, { message: "Number must be positive" }),
  IncomeInRetirement: z
    .number({ invalid_type_error: "Income In Retirement is required" })
    .min(0, { message: "Number must be positive" }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const Inputs = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form className="formBox" onSubmit={handleSubmit(onSubmit)}>
      <div className="inputContainer">
        {inputs.map((input) => (
          <div key={input.id} className="inputBlock">
            <p>{input.title}</p>
            <input
              {...register(input.schemaName as Path<ExpenseFormData>, {
                valueAsNumber: true,
              })}
              placeholder="0"
              id="Age"
              type="number"
            />
            {errors[input.schemaName] && (
              <p className="text-danger">{errors[input.schemaName].message}</p>
            )}
          </div>
        ))}
      </div>

      <button className="calculateButton" type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </button>
    </form>
  );
};

export default Inputs;
