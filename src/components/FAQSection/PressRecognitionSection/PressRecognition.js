import React from "react";
import "./PressRecognitionStyles.css";

import award1 from "../../../images/award1.png";
import award2 from "../../../images/award2.png";
import award3 from "../../../images/award3.png";
import award4 from "../../../images/award4.png";
import award5 from "../../../images/award5.png";

const PressRecognition = () => {
  return (
    <div className="press-recognition-section">
      <h2>
        Awarded Best Dissertation Writing Service in the UK -{" "}
        <span> Press Recognition</span>
      </h2>
      <div className="award-images">
        <img src={award1} alt="Award 1" />
        <img src={award2} alt="Award 2" />
        <img src={award3} alt="Award 3" />
        <img src={award4} alt="Award 4" />
        <img src={award5} alt="Award 5" />
      </div>
    </div>
  );
};

export default PressRecognition;
