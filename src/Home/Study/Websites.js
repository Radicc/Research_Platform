import "./Websites.scss";
import { useState, useEffect } from "react";

import yahooFinanceLogo from "../images/yahooLogo.png";
import yahooFinanceBanner from "../images/yahooBanner.jpg";
import tradingViewLogo from "../images/tradingViewLogo.png";
import tradingViewBanner from "../images/tradingViewBanner.jpg";
import seakingAlphaLogo from "../images/seakingAlphaLogo.png";
import seakingAlphaBanner from "../images/SeakingAlphaBanner.jpg";
import tikrLogo from "../images/TikrLogo.png";
import tikrBanner from "../images/TikrBanner.jpg";

export default function Websites(props) {
  const websitesInfoObject = [
    {
      img: yahooFinanceLogo,
      banner: yahooFinanceBanner,
      name: "Yahoo Finance",
      link: "https://finance.yahoo.com/",
    },
    {
      img: tradingViewLogo,
      banner: tradingViewBanner,
      name: "TradingView",
      link: "https://www.tradingview.com/",
    },
    {
      img: seakingAlphaLogo,
      banner: seakingAlphaBanner,
      name: "Yahoo Finance",
      link: "https://finance.yahoo.com/",
    },
    {
      img: tikrLogo,
      banner: tikrBanner,
      name: "TradingView",
      link: "https://www.tradingview.com/",
    },
  ];
  const [websitesInfo, setWebsitesInfo] = useState(websitesInfoObject);

  const [filteredArr, setFilteredArr] = useState(0);
  let content = [];
  let content2 = [];

  const newArr = (x) => {
    let newX = [];
    for (let i = 0; i < x.length; i++) {
      newX.push(x[i]);
    }
    return newX;
  };

  const RenderBooks = (y) => {
    for (let i = 0; i < y.length; i = i + 2) {
      content.push(
        <div
          onClick={() => (window.location.href = y[i].link)}
          className="WebsitesComponent"
        >
          <img className="Logo" src={y[i].img} />
          <img className="Banner" src={y[i].banner} />
        </div>
      );
    }
  };
  const RenderBooks2 = (y) => {
    for (let i = 1; i < y.length; i = i + 2) {
      content2.push(
        <div
          onClick={() => (window.location.href = y[i].link)}
          className="WebsitesComponent"
        >
          <img className="Logo" src={y[i].img} />
          <img className="Banner" src={y[i].banner} />
        </div>
      );
    }
  };

  useEffect(() => {
    const filteredX = newArr(websitesInfo);
    setFilteredArr(filteredX);
  }, [props.props]);

  return (
    <>
      <div className="panel1">
        {RenderBooks(filteredArr)}
        {content}
      </div>
      <div className="panel1">
        {RenderBooks2(filteredArr)}
        {content2}
      </div>
    </>
  );
}
