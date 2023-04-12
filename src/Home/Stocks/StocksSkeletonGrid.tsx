import React from "react";

const StocksSkeletonGrid = () => {
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="Stocks">
      <div className="containerSectionStocks">
        {skeletons.map((item) => (
          <div key={item} className="containerStocks">
            <h1>Loading...</h1>
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StocksSkeletonGrid;
