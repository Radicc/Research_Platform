import React, { useRef, useState } from "react";
import { allData } from "../data/Nyse.ts";
import "./StocksAnalyzerSearch.scss";

interface Props {
  onSearch: (searchText: string) => void;
}
const StocksAnalyzerSearch = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isValue, setValue] = useState("");
  const onChange = (e: string) => {
    setValue(e);
    console.log(e);
  };
  const search = (e: string) => {
    onSearch(isValue.toUpperCase());
  };
  return (
    <>
      <h1>Stocks Analyzer</h1>
      <h2>( in development...) </h2>
      <h2>( ENTER to call a data ) </h2>
      <form
        className="searchForm"
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) onSearch(ref.current.value.toUpperCase());
        }}
      >
        <input
          placeholder="Enter Stock Ticker"
          ref={ref}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className="searchContainer">
          {isValue &&
            allData
              .filter((item) => {
                const searchTerm = isValue.toLowerCase();
                const stockName = item.name.toLowerCase();
                const stockTicker = item.ticker.toLowerCase();
                return (
                  (searchTerm.length && stockName.startsWith(searchTerm)) ||
                  stockTicker.startsWith(searchTerm)
                );
              })
              .map((item) => (
                <div
                  onClick={() => search(item.ticker)}
                  key={item.ticker}
                  className="searchValueDataContainer"
                >
                  <p className="companyNameSearch">{item.name}</p>
                  <p className="companyTickerSearch">{item.ticker}</p>
                </div>
              ))}
        </div>
      </form>
    </>
  );
};

export default StocksAnalyzerSearch;
