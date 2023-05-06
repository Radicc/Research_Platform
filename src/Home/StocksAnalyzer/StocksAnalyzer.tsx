import React from "react";
import "./StocksAnalyzer.scss";

const StocksAnalyzer = () => {
  return (
    <div className="StocksAnalyzer">
      <h1>StocksAnalyzer</h1>
      <input placeholder="Search for stocks" />
      <div className="container">
        <div className="data">
          <h1>Years</h1>
        </div>
        <div className="data">
          <h1>Revenue growth</h1>
        </div>
        <div className="data">
          <h1>Net Income</h1>
        </div>
        <div className="data">
          <h1>Total Assets</h1>
        </div>
        <div className="data">
          <h1>Total Liabilities</h1>
        </div>
        <div className="data">
          <h1>Total Equity</h1>
        </div>
        <div className="data">
          <h1>Free Cash FLow</h1>
        </div>
        <div className="data">
          <h1>Shares Outstanding</h1>
        </div>
      </div>
    </div>
  );
};

export default StocksAnalyzer;
