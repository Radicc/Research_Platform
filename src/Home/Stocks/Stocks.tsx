import React from "react";

import "./Stocks.scss";

import useNews from "../../hooks/useNews.ts";
import StocksSkeletonGrid from "./StocksSkeletonGrid.tsx";

interface Props {
  navbarClass: string;
  setNavbarClass: (data: string) => void;
}

const Stocks = ({ navbarClass, setNavbarClass }: Props) => {
  const { data, error, isLoading } = useNews();

  if (error) return <p>{error}</p>;

  if (navbarClass === "header2") {
    setNavbarClass("header3");
  }

  return (
    <div className="Stocks">
      <div className="containerSectionStocks">
        {isLoading && <StocksSkeletonGrid />}
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => window.open(item.link, "_blank")}
            className="containerStocks"
          >
            <h1>{item.title}</h1>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Stocks;
