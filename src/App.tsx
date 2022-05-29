import React from "react";

import "./App.css";
import Buttons from "./components/Buttons";
import AddNewCard from "./components/AddNewCard";
import Card from "./components/Card";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <div>
      <h1>Your Learning Flashcards</h1>
      <Buttons />
      <Card />
      <Navigation />
      <AddNewCard />
    </div>
  );
};

export default App;
