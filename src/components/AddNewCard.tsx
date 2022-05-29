import React from "react";

const AddNewCard: React.FC = () => {
  return (
    <div className="add-container">
      <h1>
        Add New Card
        <button className="btn btn-small btn-ghost">
          <i className="fas fa-times"></i>
        </button>
      </h1>

      <div className="form-group">
        <label htmlFor="word">New word/ term:</label>
        <textarea placeholder="Enter word..."></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="definition">Definition:</label>
        <textarea placeholder="Enter definition..."></textarea>
      </div>

      <button className="btn">
        <i className="fas fa-plus"></i> Add This Card
      </button>
    </div>
  );
};

export default AddNewCard;
