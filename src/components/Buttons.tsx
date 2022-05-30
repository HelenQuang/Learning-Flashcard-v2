import React from "react";

const Buttons: React.FC<{ showCardHandler: () => void }> = ({
  showCardHandler,
}) => {
  return (
    <div>
      <button className="btn btn-small" onClick={showCardHandler}>
        <i className="fas fa-plus"></i> Add New Card
      </button>

      <button className="clear btn">
        <i className="fas fa-trash"></i> Delete All Cards
      </button>
    </div>
  );
};

export default Buttons;
