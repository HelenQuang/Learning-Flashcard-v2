import React, { useState } from "react";
import { CardInterface } from "../CardInterface";

interface AddNewCardProps {
  hideCardHandler: () => void;
}

const AddNewCard: React.FC<AddNewCardProps> = ({ hideCardHandler }) => {
  const [newWord, setNewWord] = useState<string>("");
  const [newDefinition, setNewDefinition] = useState<string>("");

  let cardsArr: CardInterface[] = [];

  const setCardsData = (card: CardInterface[]) => {
    localStorage.setItem("cards", JSON.stringify(card));
  };

  const addCardHandler = () => {
    if (newWord && newDefinition) {
      const newCard = { word: newWord, definition: newDefinition };
      cardsArr.push(newCard);

      setCardsData(cardsArr);

      setNewWord("");
      setNewDefinition("");
      hideCardHandler();
    } else {
      alert(`Please write down what you want to remember!`);
    }
  };

  const getCardsData = () => {
    const value = localStorage.getItem("cards") || JSON.stringify([]);
    cardsArr = JSON.parse(value);
  };
  getCardsData();

  return (
    <div className="add-container" id="add-container">
      <h1>
        Add New Card
        <button className="btn btn-small btn-ghost" onClick={hideCardHandler}>
          <i className="fas fa-times"></i>
        </button>
      </h1>

      <div className="form-group">
        <label htmlFor="word">New word/ term:</label>
        <textarea
          placeholder="Enter word..."
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="definition">Definition:</label>
        <textarea
          placeholder="Enter definition..."
          value={newDefinition}
          onChange={(e) => setNewDefinition(e.target.value)}
        ></textarea>
      </div>

      <button className="btn" onClick={addCardHandler}>
        <i className="fas fa-plus"></i> Add This Card
      </button>
    </div>
  );
};

export default AddNewCard;
