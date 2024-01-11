import React from "react";
import learnMore from "../../../images/learn-more.png";
import "./QuestionStyles.css";

const Question = () => {
  return (
    <div className="button-div">
      <h2>
        <span className="heading">
          Are you working with us for the First time? If Yes?
        </span>{" "}
        Good News!! <span className="click-here">Click here</span> to avail your
        Full First Order Discount instantly:
      </h2>
      <img
        src={learnMore}
        alt="Relieve Dissertation Worries"
        className="dissertation-button"
      />
    </div>
  );
};

export default Question;
