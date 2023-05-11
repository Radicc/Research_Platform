import React from "react";
import useStockAnalyzer from "../../hooks/useStockAnalyzer.ts";
import { REFF } from "./StocksAnalyzer.tsx";

interface Props {
  stockQuery: REFF;
}

const StocksAnlyzerGrid = ({ stockQuery }: Props) => {
  const { data, error, isLoading } = useStockAnalyzer(stockQuery);
  console.log(data);

  if (error) return <p className="errorMassage">Wrong Stock Symbol</p>;
  return (
    <>
      {data &&
        !isLoading &&
        data.map((item) => (
          <div key={"1"} className="gridContainer">
            <h2 className="companyName">{item.quoteType.shortName}</h2>
            <div className="pillersContainer">
              <div className="pillersBox">
                <h1>Current Price</h1>
                <p>{`${item.financialData.currentPrice.fmt}$` || "N/A"}</p>
              </div>
              <div className="pillersBox">
                <h1>Market Cap</h1>
                <p>{item.price.marketCap.fmt || "N/A"}</p>
              </div>
              <div className="pillersBox">
                <h1>P/E</h1>
                <p>{item.summaryDetail.trailingPE?.fmt || "N/A"}</p>
              </div>
              <div className="pillersBox">
                <h1>Debt To Equity</h1>
                <p>{item.financialData.debtToEquity.fmt || "N/A"}</p>
              </div>
              <div className="pillersBox">
                <h1>Revenue Growth</h1>
                <p>{item.financialData.revenueGrowth.fmt || "N/A"}</p>
              </div>
              <div className="pillersBox">
                <h1>Profit Margin</h1>
                <p>{item.defaultKeyStatistics.profitMargins.fmt || "N/A"}</p>
              </div>
              <div className="pillersBox">
                <h1>Dividen Yield</h1>
                <p>{item.summaryDetail.dividendYield.fmt || "N/A"}</p>
              </div>
              <div className="pillersBox">
                <h1>Dividen Paid</h1>
                <p>
                  {item.defaultKeyStatistics.lastDividendValue.fmt || "N/A"}
                </p>
              </div>
              <div className="pillersBox">
                <h1>Free Cash Flow</h1>
                <p>{item.financialData.freeCashflow.fmt || "N/A"}</p>
              </div>
              <div className="pillersBox">
                <h1>Shares Outstanding</h1>
                <p>
                  {item.defaultKeyStatistics.sharesOutstanding.fmt || "N/A"}
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default StocksAnlyzerGrid;

/* <div className="dataContainer">
              <div className="dataYears">
                <h1>Years</h1>
                <div className="years">
                  <p>2022</p>
                  <p>2021</p>
                  <p>2020</p>
                  <p>2019</p>
                  <p>2018</p>
                </div>
              </div>

              <div className="data">
                <h1>Revenue growth</h1>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
              <div className="data">
                <h1>Net Income</h1>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
              <div className="data">
                <h1>Total Assets</h1>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
              <div className="data">
                <h1>Total Liabilities</h1>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
              <div className="data">
                <h1>Free Cash FLow</h1>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
              <div className="data">
                <h1>Shares Outstanding</h1>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
                <p>0</p>
              </div>
            </div> */
