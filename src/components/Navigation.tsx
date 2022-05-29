import React from "react";

const Navigation: React.FC = () => {
  return (
    <div className="navigation">
      <button className="nav-button">
        <i className="fas fa-arrow-left"></i>
      </button>

      <p id="current"></p>

      <button className="nav-button">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default Navigation;
