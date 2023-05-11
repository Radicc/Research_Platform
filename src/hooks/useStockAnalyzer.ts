import useAnalyzerData from "./useAnalyzerData.ts";
import { REFF } from "../Home/StocksAnalyzer/StocksAnalyzer.ts";
import { RootObject } from "./export interface RootObject.js";

const useStockAnalyzer = (stockQuery: REFF) =>
  useAnalyzerData<RootObject>(
    "/get-summary",
    {
      params: {
        symbol: stockQuery.searchText,
      },
    },
    [stockQuery]
  );
export default useStockAnalyzer;
