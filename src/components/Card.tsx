import React from "react";
import { CardInterface } from "../CardInterface";

interface CardProps {
  createCard: (data: CardInterface, index: number) => React.DOMElement;
}

const Card: React.FC<CardProps> = ({ createCard }) => {
  return <div id="cards-container" className="cards"></div>;
};

export default Card;
