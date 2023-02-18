import "./Youtube.scss";
import { useState, useEffect } from "react";

import EveryThingMoney from "../images/EveryThingMoney.jpg";
import EveryThingMoneyBanner from "../images/EveryThingMoneyBanner.jpg";
import SvenCarlin from "../images/SvenCarlin.jpg";
import SvenCarlinBanner from "../images/SvenCarlinBanner.jpg";
import NewMoney from "../images/NewMoney.jpg";
import NewMoneyBanner from "../images/NewMoneyBanner.jpg";
import LearnToInvest from "../images/LearnToInvest.jpg";
import LearnToInvestBanner from "../images/LearnToInvestBanner.jpg";
import ThePlainBagelLogo from "../images/plain_bagel_logo.jpg";
import ThePlainBagelBanner from "../images/plain_bagel.jpg";

export default function Youtubers(props) {
  const youtubersInfoObject = [
    {
      img: EveryThingMoney,
      banner: EveryThingMoneyBanner,
      name: "EveryThingMoney",
      link: "https://www.youtube.com/@EverythingMoney",
    },
    {
      img: SvenCarlin,
      banner: SvenCarlinBanner,
      name: "Sven Carlin, Ph.D.",
      link: "https://www.youtube.com/@Value-Investing",
    },
    {
      img: NewMoney,
      banner: NewMoneyBanner,
      name: "New Money",
      link: "https://www.youtube.com/@NewMoneyYouTube",
    },
    {
      img: LearnToInvest,
      banner: LearnToInvestBanner,
      name: "Learn to Invest",
      link: "https://www.youtube.com/@LearntoInvest",
    },
    {
      img: ThePlainBagelLogo,
      banner: ThePlainBagelBanner,
      name: "The Plain Bagel",
      link: "https://www.youtube.com/@ThePlainBagel",
    },
  ];
  const [youtubersInfo, setyoutubersInfo] = useState(youtubersInfoObject);

  const [filteredArr, setFilteredArr] = useState(0);
  let content = [];

  const newArr = (x) => {
    let newX = [];
    for (let i = 0; i < x.length; i++) {
      newX.push(x[i]);
    }
    return newX;
  };

  const RenderBooks = (y) => {
    for (let i = 0; i < y.length; i++) {
      content.push(
        <div
          onClick={() => (window.location.href = y[i].link)}
          className="YoutubeComponent"
        >
          <img className="profileIcon" src={y[i].img} />
          <img className="profileBanner" src={y[i].banner} />
        </div>
      );
    }
  };

  useEffect(() => {
    const filteredX = newArr(youtubersInfo);
    setFilteredArr(filteredX);
  }, [props.props]);

  return (
    <>
      {RenderBooks(filteredArr)}
      {content}
    </>
  );
}
