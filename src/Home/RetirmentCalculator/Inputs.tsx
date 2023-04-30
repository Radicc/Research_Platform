import React from "react";
import { Path, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuestionIcon } from "@chakra-ui/icons";
import "./_calculateButton.scss";

const inputs = [
  {
    id: 1,
    title: "Age",
    schemaName: "Age",
    info: "",
    placeholder: "18",
    information: "Age when will you start investing.",
  },
  {
    id: 2,
    title: "Retirement Age",
    schemaName: "RetirementAge",
    info: "",
    placeholder: "60",
    information: "Age when will you stop investing.",
  },
  {
    id: 3,
    title: "Current Savings",
    schemaName: "CurrentSavings",
    info: "",
    placeholder: "$10 000",
    information: "Savings that are going to be invested.",
  },
  {
    id: 4,
    title: "Monthly Savings",
    schemaName: "MonthlySavings",
    info: "",
    placeholder: "$300",
    information: "Money that you want to invest monthly.",
  },
  {
    id: 5,
    title: "Increase of Annual Savings",
    schemaName: "IncreaseOfAnnualSaving",
    info: "",
    placeholder: "3% (at least as inflation)",
    information:
      "Increase monthly savings every year. You want at least the same percentual as inflation to not lose money over time.",
  },
  {
    id: 6,
    title: "Annualized Returns",
    schemaName: "AnnualizedReturns",
    info: "",
    placeholder: "10%",
    information:
      "Annualized Returns mean how much money you will get from investing every year over XY years. Regular ETF SP500 had a 10% returns.",
  },
  {
    id: 7,
    title: "Expected age To Live To?",
    schemaName: "ExpectToLive",
    info: "",
    placeholder: "90",
    information: "What age do you expect to live to.",
  },
  {
    id: 8,
    title: "Inflation",
    schemaName: "Inflation",
    info: "",
    placeholder: "3%",
    information:
      "You can place here the average inflation that's 2.5% or you can increase it if you think that the low inflation environment is over.",
  },
  {
    id: 9,
    title: "Current Monthly Income ?",
    schemaName: "CurrentMonthlyIncome",
    info: "",
    placeholder: "$2 000",
    information:
      "Your monthly salary. We calculate how much money you are going to get monthly in retirement.",
  },
  {
    id: 10,
    title: "Income in retirement",
    schemaName: "IncomeInRetirement",
    info: "",
    placeholder: "100%",
    information:
      "How much money as salary will you get monthly from retirement. 100% means that you want to have the same standard of living as now. You can increase by over 100% to improve your standards or decrease by under 100% to lower your standards in retirement.",
  },
];

const schema = z.object({
  Age: z
    .number({ invalid_type_error: "Age is required" })
    .min(0, { message: "Number must be positive" }),
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
            <div className="HSstack">
              <div className="InformationBlock">
                <QuestionIcon
                  boxSize={{ sm: "24px", md: "40px", lg: "56px" }}
                  color="#A0AEC0"
                />
                <h5>{input.information}</h5>
              </div>
              <p>{input.title}</p>
            </div>
            <input
              {...register(input.schemaName as Path<ExpenseFormData>, {
                valueAsNumber: true,
              })}
              placeholder={input.placeholder}
              id="Age"
              type="number"
            />
            {errors[input.schemaName] && (
              <p className="dangerText">{errors[input.schemaName].message}</p>
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
