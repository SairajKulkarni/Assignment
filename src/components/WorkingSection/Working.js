import React from "react";
import Card from "./CardComponent";
import data from "./WorkingData";
import "./WorkingStyles.css";

const Working = () => (
  <div className="main-component">
    {data.map((cardData, index) => (
      <Card key={index} {...cardData} />
    ))}
  </div>
);

export default Working;
