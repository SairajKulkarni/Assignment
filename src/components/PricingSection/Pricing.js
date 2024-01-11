import React, { useState } from "react";
import "./PricingStyles.css";
import pricing from "../../images/pricing.png";

const PricingSection = () => {
  const [showPricing, setShowPricing] = useState(false);

  const togglePricing = () => {
    setShowPricing(!showPricing);
  };

  return (
    <div className="pricing-section">
      <h2>Simply get rid of your Dissertation worries Now:</h2>
      <ul>
        <li>1. Just select your domain</li>
        <li>2. Choose the exact word count</li>
        <li>3. Select the final submission date </li>
        <li>4. Get instant pricing</li>
      </ul>
      <div className="see-pricing" onClick={togglePricing}>
        <img src={pricing} alt="See Pricing" />
      </div>
    </div>
  );
};

export default PricingSection;
