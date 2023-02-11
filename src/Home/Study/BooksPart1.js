import "./Study.scss";
import { useState } from "react";

export default function BooksPart1(props) {
  return (
    <>
      <div className="BookComponent">
        <h2>{booksInfo.book1.name}</h2>
        <p>by {booksInfo.book1.author}</p>
        <img src={Psychology} />
      </div>
      <div className="BookComponent">
        <h2>{booksInfo.book2.name}</h2>
        <p>by {booksInfo.book2.author}</p>
        <img src={booksInfo.book2.img} />
      </div>
      <div className="BookComponent">
        <h2>{booksInfo.book3.name}</h2>
        <p>by {booksInfo.book3.author}</p>
        <img src={booksInfo.book3.img} />
      </div>
      <div className="BookComponent">
        <h2>{booksInfo.book4.name}</h2>
        <p>by {booksInfo.book4.author}</p>
        <img src={booksInfo.book4.img} />
      </div>
    </>
  );
}
