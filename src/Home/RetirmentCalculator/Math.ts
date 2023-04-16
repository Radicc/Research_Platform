import { Data } from "./RetirmentCalculator";

const Math = (data: Data) => {
  let RetirementAge = data.RetirementAge;
  let ExpectToLive = data.ExpectToLive;
  let yearsToRetireCal = 0;
  let NormalSaveCal = 0;
  let IncreaseOfAnnualSavingCal = data.IncreaseOfAnnualSaving / 100;
  let Inflation = data.Inflation / 100;
  let SalaryRetirement = data.IncomeInRetirement / 100;

  let AnnualizedReturnsCal = data.AnnualizedReturns / 100;

  let Enough = "?";
  let firstYearCal = 0;
  let LastYearCal = 0;
  let GrowthCal = 0;
  let AnnualSavings = data.MonthlySavings * 12;
  let RetirementIncome = data.CurrentMonthlyIncome;
  let BalancedEnd = 0;

  firstYearCal = // $3600 + $10 000 + $1 000 = $14 600 => First year of investing
    AnnualSavings +
    data.CurrentSavings + // $10 000
    (data.AnnualizedReturns / 100) * data.CurrentSavings; // 10 / 100 * 10 000 = $1 000 => (1year annualized returns of current savings)
  LastYearCal = firstYearCal; // First year of investing
  NormalSaveCal = firstYearCal;

  yearsToRetireCal = data.RetirementAge - data.Age; // 60y(retireAge) - 20y(how old are we) Years to retirement

  //yearsToDieCal = data.ExpectToLive - data.RetirementAge; // 90y(Death year) - 60y(retireAge) Years in retirement

  for (let i = 0; i < yearsToRetireCal; i++) {
    console.log(`Saved:${NormalSaveCal}`);

    NormalSaveCal += AnnualSavings + IncreaseOfAnnualSavingCal * AnnualSavings;
  }

  for (let i = 0; i < yearsToRetireCal; i++) {
    console.log(`Growth:${LastYearCal}`);

    LastYearCal +=
      AnnualizedReturnsCal * LastYearCal +
      (AnnualSavings * IncreaseOfAnnualSavingCal + AnnualSavings);
  }

  GrowthCal = LastYearCal - NormalSaveCal;

  for (let i = 0; i < yearsToRetireCal; i++) {
    RetirementIncome += RetirementIncome * Inflation;
  }
  RetirementIncome = RetirementIncome * SalaryRetirement;

  BalancedEnd = LastYearCal;
  for (let i = RetirementAge; i < ExpectToLive; i++) {
    BalancedEnd -= (RetirementIncome + RetirementIncome * Inflation) * 12;
  }

  if (BalancedEnd > 0) {
    Enough = "Yes";
  } else {
    Enough = "No";
  }

  return {
    RetirementAge,
    ExpectToLive,
    NormalSaveCal,
    LastYearCal,
    GrowthCal,
    RetirementIncome,
    BalancedEnd,
    Enough,
  };
};
export default Math;
