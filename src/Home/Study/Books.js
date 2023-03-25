import "./Study.scss";
import { useState, useEffect } from "react";

import Babylon from "../images/The_Richest_Man_In_Babylon.jpg";
import Psychology from "../images/Psychology_of_Money.jpg";
import OneUpOnWallStreet from "../images/One_Up_On_WallStreet.jpg";
import RicherWiser from "../images/Richer_Wiser_Happier.jpeg";
import GoodStocks from "../images/Good_Stocks_Cheap.jpg";
import IntelligentInvestor from "../images/The_Intelligent_Investor.jpeg";

import amazonLogo from "../images/amazonLogo.png";

export default function Books(props) {
  const booksInfo = [
    {
      img: Babylon,
      name: "The Richest Man in Babylon",
      author: "George S. Clason",
      link1: "https://amzn.to/3yLc279",
      link1IMG: amazonLogo,
      difficulty: 1,
    },
    {
      img: Psychology,
      name: "Psychology of money",
      author: "Morgan Housel",
      link1: "https://amzn.to/3FUMt7V",
      link1IMG: amazonLogo,
      difficulty: 1,
    },
    {
      img: OneUpOnWallStreet,
      name: "One Up On Wall Street",
      author: "Peter Lynch",
      link1: "https://amzn.to/3TqycVJ",
      link1IMG: amazonLogo,
      difficulty: 1,
    },
    {
      img: RicherWiser,
      name: "Richer Wiser Happier",
      author: "William Green",
      link1: "https://amzn.to/3TmWMqL",
      link1IMG: amazonLogo,
      difficulty: 2,
    },
    {
      img: GoodStocks,
      name: "Good Stocks Cheap",
      author: "Kenneth Jeffrey Marshall",
      link1: "https://amzn.to/3LtLS0f",
      link1IMG: amazonLogo,
      difficulty: 2,
    },
    {
      img: IntelligentInvestor,
      name: "The Intelligent Investor",
      author: "Benjamin Graham",
      link1: "https://amzn.to/40g91aF",
      link1IMG: amazonLogo,
      difficulty: 3,
    },
  ];

  const [bookInfo, setBookInfo] = useState(booksInfo);
  const [filteredArr, setFilteredArr] = useState(0);
  let content = [];

  const newArr = (x) => {
    let newX = [];
    for (let i = 0; i < x.length; i++) {
      if (x[i].difficulty === props.props) {
        newX.push(x[i]);
      }
    }
    return newX;
  };

  const RenderBooks = (y) => {
    for (let i = 0; i < y.length; i++) {
      content.push(
        <div className="BookComponent">
          <h2>{y[i].name}</h2>
          <p>by {y[i].author}</p>
          <img src={y[i].img} />
          <div>
            <div>
              <img
                onClick={() => window.open(y[i].link1, "_blank")}
                src={y[i].link1IMG}
              />
            </div>
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    if (props.props === 1) {
      const filteredX = newArr(bookInfo);
      setFilteredArr(filteredX);
    } else if (props.props === 2) {
      const filteredX = newArr(bookInfo);
      setFilteredArr(filteredX);
    } else {
      const filteredX = newArr(bookInfo);
      setFilteredArr(filteredX);
    }
  }, [props.props]);

  return (
    <>
      {RenderBooks(filteredArr)}
      {content}
    </>
  );
}
