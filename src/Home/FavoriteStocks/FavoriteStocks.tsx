import React from "react";
import "./FavoriteStocks.scss";

interface Props {
  navbarClass: string;
  setNavbarClass: (className: string) => void;
}

const FavoriteStocks = ({ navbarClass, setNavbarClass }: Props) => {
  if (navbarClass === "header2") {
    setNavbarClass("header3");
  }
  return (
    <div className="FavoriteStocks">
      <h1>FavoriteStocks</h1>
    </div>
  );
};

export default FavoriteStocks;
