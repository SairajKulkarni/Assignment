import React from "react";

const Card = ({ logo, description }) => (
  <div className="card">
    <img src={logo} alt="Logo" className="card-logo" />
    <p className="card-description">{description}</p>
  </div>
);

export default Card;
