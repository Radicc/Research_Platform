import React, { useState } from "react";
import "./StocksAnalyzer.scss";
import StocksAnalyzerSearch from "./StocksAnalyzerSearch.tsx";
import StocksAnlyzerGrid from "./StocksAnlyzerGrid.tsx";

export interface REFF {
  searchText: string | null;
  shortName: string | null;
}

const StocksAnalyzer = () => {
  const [stockQuery, setStockQuery] = useState<REFF>({} as REFF);
  return (
    <div className="StocksAnalyzer">
      <StocksAnalyzerSearch
        onSearch={(searchText) => setStockQuery({ ...stockQuery, searchText })}
      />
      {stockQuery.searchText && <StocksAnlyzerGrid stockQuery={stockQuery} />}
    </div>
  );
};

export default StocksAnalyzer;
