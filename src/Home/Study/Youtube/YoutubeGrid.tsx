import "./Youtube.scss";
import React from "react";

import SvenCarlin from "../../images/SvenCarlin.jpg";
import SvenCarlinBanner from "../../images/SvenCarlinBanner.jpg";
import NewMoney from "../../images/NewMoney.jpg";
import NewMoneyBanner from "../../images/NewMoneyBanner.jpg";
import LearnToInvest from "../../images/LearnToInvest.jpg";
import LearnToInvestBanner from "../../images/LearnToInvestBanner.jpg";
import ThePlainBagelLogo from "../../images/plain_bagel_logo.jpg";
import ThePlainBagelBanner from "../../images/plain_bagel.jpg";

const youtubers = [
  {
    id: 1,
    img: SvenCarlin,
    banner: SvenCarlinBanner,
    name: "Sven Carlin, Ph.D.",
    link: "https://www.youtube.com/@Value-Investing",
  },
  {
    id: 2,
    img: NewMoney,
    banner: NewMoneyBanner,
    name: "New Money",
    link: "https://www.youtube.com/@NewMoneyYouTube",
  },
  {
    id: 3,
    img: LearnToInvest,
    banner: LearnToInvestBanner,
    name: "Learn to Invest",
    link: "https://www.youtube.com/@LearntoInvest",
  },
  {
    id: 4,
    img: ThePlainBagelLogo,
    banner: ThePlainBagelBanner,
    name: "The Plain Bagel",
    link: "https://www.youtube.com/@ThePlainBagel",
  },
];
const Youtubers = () => {
  return (
    <>
      {youtubers.map((item) => (
        <div
          key={item.id}
          onClick={() => window.open(item.link, "_blank")}
          className="YoutubeComponent"
        >
          <img className="profileIcon" src={item.img} alt="profileIcon" />
          <img
            className="profileBanner"
            src={item.banner}
            alt="profileBanner"
          />
        </div>
      ))}
    </>
  );
};
export default Youtubers;
