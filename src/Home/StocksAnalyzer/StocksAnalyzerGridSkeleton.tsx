import React from "react";
import Spinner from "react-bootstrap/Spinner";

const StocksAnalyzerGridSkeleton = () => {
  return (
    <div className="gridContainer">
      <h1>Company Name</h1>
      <p className="companySummary">Company Summary</p>
      <Spinner animation="border" variant="warning" />
      <div className="pillersContainer">
        <div className="pillersBox">
          <h1>Current Price</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>Market Cap</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>P/E</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>Debt To Equity</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>Revenue Growth</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>Profit Margin</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>Dividen Yield</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>Dividen Paid</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>Free Cash Flow</h1>
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="pillersBox">
          <h1>Shares Outstanding</h1>
          <Spinner animation="border" variant="warning" />
        </div>
      </div>

      <div className="dataContainer">
        <div className="dataYears">
          <h1>Years</h1>
          <div className="years">
            <p>2022</p>
            <p>2021</p>
            <p>2020</p>
            <p>2019</p>
          </div>
        </div>

        <div className="data">
          <h1>Revenue growth</h1>
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
        </div>
        <div className="data">
          <h1>Earnings growth</h1>
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
          <Spinner animation="border" variant="warning" />
        </div>
      </div>
    </div>
  );
};

export default StocksAnalyzerGridSkeleton;
