import "./Websites.scss";
import { useState, useEffect } from "react";

import yahooFinanceLogo from "../images/yahooLogo.png";
import yahooFinanceBanner from "../images/yahooBanner.jpg";
import tradingViewLogo from "../images/tradingViewLogo.png";
import tradingViewBanner from "../images/tradingViewBanner.jpg";
import seekingAlphaLogo from "../images/seakingAlphaLogo.png";
import seekingAlphaBanner from "../images/SeakingAlphaBanner.jpg";
import tikrLogo from "../images/TikrLogo.png";
import tikrBanner from "../images/TikrBanner.jpg";

export default function Websites(props) {
  const websitesInfoObject = [
    {
      img: yahooFinanceLogo,
      banner: yahooFinanceBanner,
      name: "Yahoo Finance",
      link: "https://finance.yahoo.com/",
      text: "Yahoo! Finance is a media property that is part of the Yahoo! network. It provides financial news, data and commentary including stock quotes, press releases, financial reports, and original content. It also offers some online tools for personal finance management.",
    },
    {
      img: tradingViewLogo,
      banner: tradingViewBanner,
      name: "TradingView",
      link: "https://www.tradingview.com/",
      text: "Charting platform and social network used by 30M+ traders and investors worldwide to spot opportunities across global markets.",
    },
    {
      img: seekingAlphaLogo,
      banner: seekingAlphaBanner,
      name: "SeekingAlpha",
      link: "https://seekingalpha.com/",
      text: "Seeking Alpha is a crowd-sourced content service for financial markets. Articles and research covers a broad range of stocks, asset classes, exchange-traded funds (ETFs), and investment strategies.",
    },
    {
      img: tikrLogo,
      banner: tikrBanner,
      name: "Tikr Terminal",
      link: "https://app.tikr.com/register?ref=v3xzcz",
      text: "Invest like Wall Street with TIKR Terminal - Find the best stocks, follow top investors, quickly analyze businesses, and monitor your portfolio with TIKR.",
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
          onClick={() => window.open(y[i].link, "_blank")}
          className="WebsitesComponent"
        >
          <img className="Logo" src={y[i].img} />
          <img className="Banner" src={y[i].banner} />
          <div className="textarea">
            <h2 className="titul">{y[i].name}</h2>
            <p className="text">{y[i].text}</p>
          </div>
        </div>
      );
    }
  };
  const RenderBooks2 = (y) => {
    for (let i = 1; i < y.length; i = i + 2) {
      content2.push(
        <div
          onClick={() => window.open(y[i].link, "_blank")}
          className="WebsitesComponent"
        >
          <img className="Logo" src={y[i].img} />
          <img className="Banner" src={y[i].banner} />
          <div className="textarea">
            <h2 className="titul">{y[i].name}</h2>
            <p className="text">{y[i].text}</p>
          </div>
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
