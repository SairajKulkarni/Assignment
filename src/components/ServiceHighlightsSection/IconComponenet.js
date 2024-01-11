import React from "react";

const IconComponent = ({ icon, title, description }) => {
  return (
    <div className="service-feature">
      <div className="icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default IconComponent;
