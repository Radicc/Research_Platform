import React from "react";
import "../Study.scss";

import Babylon from "../../images/The_Richest_Man_In_Babylon.jpg";
import Psychology from "../../images/Psychology_of_Money.jpg";
import OneUpOnWallStreet from "../../images/One_Up_On_WallStreet.jpg";
import RicherWiser from "../../images/Richer_Wiser_Happier.jpeg";
import GoodStocks from "../../images/Good_Stocks_Cheap.jpg";
import IntelligentInvestor from "../../images/The_Intelligent_Investor.jpeg";

import amazonLogo from "../../images/amazonLogo.png";

interface Props {
  difficult: number;
}

const booksInfo = [
  {
    id: 1,
    img: Babylon,
    name: "The Richest Man in Babylon",
    author: "George S. Clason",
    link1: "https://amzn.to/3yLc279",
    link1IMG: amazonLogo,
    difficulty: 1,
  },
  {
    id: 2,
    img: Psychology,
    name: "Psychology of money",
    author: "Morgan Housel",
    link1: "https://amzn.to/3FUMt7V",
    link1IMG: amazonLogo,
    difficulty: 1,
  },
  {
    id: 3,
    img: OneUpOnWallStreet,
    name: "One Up On Wall Street",
    author: "Peter Lynch",
    link1: "https://amzn.to/3TqycVJ",
    link1IMG: amazonLogo,
    difficulty: 1,
  },
  {
    id: 4,
    img: RicherWiser,
    name: "Richer Wiser Happier",
    author: "William Green",
    link1: "https://amzn.to/3TmWMqL",
    link1IMG: amazonLogo,
    difficulty: 2,
  },
  {
    id: 5,
    img: GoodStocks,
    name: "Good Stocks Cheap",
    author: "Kenneth Jeffrey Marshall",
    link1: "https://amzn.to/3LtLS0f",
    link1IMG: amazonLogo,
    difficulty: 2,
  },
  {
    id: 6,
    img: IntelligentInvestor,
    name: "The Intelligent Investor",
    author: "Benjamin Graham",
    link1: "https://amzn.to/40g91aF",
    link1IMG: amazonLogo,
    difficulty: 3,
  },
];

const Books = ({ difficult }: Props) => {
  return (
    <>
      {booksInfo.map((item) =>
        difficult === item.difficulty ? (
          <div key={item.id} className="BookComponent">
            <h2>{item.name}</h2>
            <p>by {item.author}</p>
            <img src={item.img} alt={item.img} />
            <div>
              <div>
                <img
                  onClick={() => window.open(item.link1, "_blank")}
                  className="amazonIcon"
                  src={item.link1IMG}
                  alt={item.link1IMG}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default Books;
