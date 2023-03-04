import "./Stocks.scss";
import { useState, useEffect } from "react";

export default function Stocks() {
  const [data, setData] = useState([]);
  const [section, setSection] = useState([]);

  const fetchMe = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "5ff7652132mshfd5344fae57d12bp1aac72jsn2afee6589cda",
        "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com",
      },
    };

    fetch(
      "https://yahoo-finance15.p.rapidapi.com/api/yahoo/ne/news/AAPL",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.item))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (data.length != 0) {
      renderFilteredData(data);
      console.log(section);
    } else {
      fetchMe();
      console.log("fetched");
    }
  }, [data]);

  const renderFilteredData = (y) => {
    setSection([]);
    for (let i = 0; i < y.length; i++) {
      setSection((prevArray) => [
        ...prevArray,
        <div
          onClick={() => window.open(y[i].link, "_blank")}
          className="containerStocks"
        >
          <h1>{y[i].title}</h1>
          <p>{y[i].description}</p>
          <h5>{y[i].pubDate}</h5>
        </div>,
      ]);
    }
  };

  return (
    <div className="Stocks">
      <div className="containerSectionStocks"> {section}</div>
    </div>
  );
}
