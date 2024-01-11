// ServiceHighlights.js

import React from "react";
import "./ServiceHighlightsStyles.css";
import IconComponent from "./IconComponenet";
import featuresData from "./featuresData"; // Import the featuresData array

const ServiceHighlights = () => {
  return (
    <div className="service-highlights">
      <h1>What makes Projectsdeal UK #1 Dissertation Writing Service</h1>

      <div className="features-container">
        {featuresData.map((feature, index) => (
          <IconComponent
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceHighlights;
