import "./Study.scss";
import { useState, useEffect } from "react";

import Babylon from "../images/The_Richest_Man_In_Babylon.jpg";
import Psychology from "../images/Psychology_of_Money.jpg";
import OneUpOnWallStreet from "../images/One_Up_On_WallStreet.jpg";
import RicherWiser from "../images/Richer_Wiser_Happier.jpeg";
import GoodStocks from "../images/Good_Stocks_Cheap.jpg";
import IntelligentInvestor from "../images/The_Intelligent_Investor.jpeg";

export default function Books(props) {
  const booksInfo = [
    {
      img: Babylon,
      name: "The Richest Man in Babylon",
      author: "George S. Clason",
      difficulty: 1,
    },
    {
      img: Psychology,
      name: "Psychology of money",
      author: "Morgan Housel",
      difficulty: 1,
    },
    {
      img: OneUpOnWallStreet,
      name: "One Up On Wall Street",
      author: "Peter Lynch",
      difficulty: 1,
    },
    {
      img: RicherWiser,
      name: "Richer Wiser Happier",
      author: "William Green",
      difficulty: 2,
    },
    {
      img: GoodStocks,
      name: "Good Stocks Cheap",
      author: "Kenneth Jeffrey Marshall",
      difficulty: 2,
    },
    {
      img: IntelligentInvestor,
      name: "The Intelligent Investor",
      author: "Benjamin Graham",
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
