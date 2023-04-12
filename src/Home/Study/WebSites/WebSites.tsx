import React from "react";
import "./Websites.scss";

import yahooFinanceBanner from "../../images/yahooBanner.jpg";
import tradingViewBanner from "../../images/tradingViewBanner.jpg";
import seekingAlphaBanner from "../../images/SeakingAlphaBanner.jpg";
import tikrBanner from "../../images/TikrBanner.jpg";

const websitesInfoObject = [
  {
    banner: yahooFinanceBanner,
    name: "Yahoo Finance",
    link: "https://finance.yahoo.com/",
    text: "Yahoo! Finance is a media property that is part of the Yahoo! network. It provides financial news, data and commentary including stock quotes, press releases, financial reports, and original content. It also offers some online tools for personal finance management.",
  },
  {
    banner: tradingViewBanner,
    name: "TradingView",
    link: "https://www.tradingview.com/",
    text: "Charting platform and social network used by 30M+ traders and investors worldwide to spot opportunities across global markets.",
  },
  {
    banner: seekingAlphaBanner,
    name: "SeekingAlpha",
    link: "https://seekingalpha.com/",
    text: "Seeking Alpha is a crowd-sourced content service for financial markets. Articles and research covers a broad range of stocks, asset classes, exchange-traded funds (ETFs), and investment strategies.",
  },
  {
    banner: tikrBanner,
    name: "Tikr Terminal",
    link: "https://app.tikr.com/register?ref=v3xzcz",
    text: "Invest like Wall Street with TIKR Terminal - Find the best stocks, follow top investors, quickly analyze businesses, and monitor your portfolio with TIKR.",
  },
];

const WebSites = () => {
  return websitesInfoObject.map((item) => (
    <div
      onClick={() => window.open(item.link, "_blank")}
      className="WebsitesComponent"
    >
      <img className="Banner" src={item.banner} alt="Banner" />
      <div className="textarea">
        <h2 className="titul">{item.name}</h2>
        <p className="text">{item.text}</p>
      </div>
    </div>
  ));
};

export default WebSites;
