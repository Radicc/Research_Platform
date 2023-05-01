import React from "react";
import "./Websites.scss";

import yahooFinanceBanner from "../../images/yahooBanner.jpg";
import tradingViewBanner from "../../images/tradingViewBanner.jpg";
import seekingAlphaBanner from "../../images/SeakingAlphaBanner.jpg";
import tikrBanner from "../../images/TikrBanner.jpg";

const websitesInfoObject = [
  {
    id: 1,
    banner: yahooFinanceBanner,
    name: "Yahoo Finance",
    link: "https://finance.yahoo.com/",
    text: "Media property network that provides financial news, data and commentary.",
  },
  {
    id: 2,
    banner: tradingViewBanner,
    name: "TradingView",
    link: "https://www.tradingview.com/",
    text: "Charting platform and social network used traders and investors.",
  },
  {
    id: 3,
    banner: seekingAlphaBanner,
    name: "SeekingAlpha",
    link: "https://seekingalpha.com/",
    text: "Crowd-sourced content service for financial markets. Articles and research covers a broad range of stocks, asset.",
  },
  {
    id: 4,
    banner: tikrBanner,
    name: "Tikr Terminal",
    link: "https://app.tikr.com/register?ref=v3xzcz",
    text: "Find the best stocks, follow top investors, quickly analyze businesses.",
  },
];

const WebSites = () => {
  return websitesInfoObject.map((item) => (
    <div
      key={item.id}
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
