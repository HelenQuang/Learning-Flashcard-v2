import React, { useState } from "react";

import "./App.css";
import Buttons from "./components/Buttons";
import AddNewCard from "./components/AddNewCard";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import { CardInterface } from "./CardInterface";

const App: React.FC = () => {
  const [isCardShown, setIsCardShown] = useState(false);
  const showCardHandler = () => {
    setIsCardShown(true);
  };
  const hideCardHandler = () => {
    setIsCardShown(false);
  };

  // let currentActiveCard = 0;
  // const cardsEl = [];

  const createCard = (data: CardInterface, index: number) => {
    return (
      <div className="cart">
        <div className="inner-card">
          <div className="inner-card-front">
            <p>{data.word}</p>
          </div>

          <div className="inner-card-back">
            <p>{data.definition}</p>
          </div>
        </div>
      </div>
    );
  };

  const getCardsData = () => {
    const value = localStorage.getItem("cards") || JSON.stringify([]);
    const cardsData = JSON.parse(value);

    console.log(cardsData);
    cardsData.forEach((data: CardInterface, index: number) =>
      createCard(data, index)
    );
  };
  getCardsData();

  return (
    <>
      {!isCardShown && (
        <div>
          <h1>Your Learning Flashcards</h1>
          <Buttons showCardHandler={showCardHandler} />
          <Card createCard={createCard} />

          <Navigation />
        </div>
      )}

      {isCardShown && <AddNewCard hideCardHandler={hideCardHandler} />}
    </>
  );
};

export default App;
