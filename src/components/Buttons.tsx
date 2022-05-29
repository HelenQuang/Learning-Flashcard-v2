import React from "react";

const Buttons: React.FC = () => {
  return (
    <div>
      <button className="btn btn-small">
        <i className="fas fa-plus"></i> Add New Card
      </button>
      <button className="clear btn">
        <i className="fas fa-trash"></i> Delete All Cards
      </button>
    </div>
  );
};

export default Buttons;
