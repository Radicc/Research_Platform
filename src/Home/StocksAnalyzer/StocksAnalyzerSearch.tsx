import React, { useRef, useState } from "react";
import { allData } from "../data/Nyse.ts";
import "./StocksAnalyzerSearch.scss";

interface Props {
  onSearch: (searchText: string) => void;
}
const StocksAnalyzerSearch = ({ onSearch }: Props) => {
  //const [isRef, setRef] = useState(null);
  const [isValue, setValue] = useState<string | null>(null);
  const onChange = (e: string) => {
    setValue(e);
    console.log(isValue);
  };
  const search = (e: string) => {
    setValue(e);
    onSearch(e.toUpperCase());
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
          if (isValue) onSearch(isValue.toUpperCase());
        }}
      >
        <input
          placeholder="Enter Stock Ticker"
          value={isValue || ""}
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
                  (stockTicker.startsWith(searchTerm) &&
                    stockTicker !== searchTerm)
                );
              })
              .map((item) => (
                <div
                  onClick={() => search(item.ticker)}
                  key={item.id}
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
