import React from "react";
import "../RetirmentCalculator/_calculateButton.scss";

interface Props {
  text: string;
  onClick: () => void;
}

const button1 = ({ text, onClick }: Props) => {
  return (
    <button type="submit" className="calculateButton" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {text}
    </button>
  );
};

export default button1;
