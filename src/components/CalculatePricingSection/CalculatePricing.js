// CalculatePricing.js

import React from "react";
import "./CalculatePricingStyles.css";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import formHuman from "../../images/form_human.png";
import trustedStore from "../../images/trusted_store.png";
import specialOffer from "../../images/special_offer.png";
import checkMark from "../../images/check_mark.png";
import {
  academicLevelOptions,
  domainOptions,
  desiredServiceOptions,
  wordsPagesOptions,
  toolOptions,
} from "./optionsData";
import SelectInput from "./SelectInput";
import { FaCalculator } from "react-icons/fa";

const CalculatePricing = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const [startDate, setStartDate] = useState(null);

  return (
    <div className="form-area">
      <div className="side-images">
        <img
          className="trusted-store"
          src={trustedStore}
          alt="Google Trusted Store"
        />
        <img
          className="form-human"
          src={formHuman}
          alt="Lady Beside the form"
        />
      </div>
      <img
        className="special-offer"
        src={specialOffer}
        alt="special offer tag"
      />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-top">
            <div className="form-heading">
              <img src={checkMark} alt="check-mark" className="check-mark" />
              <h2>Calculate Pricing</h2>
            </div>
            <p>Just Select Correct Options and Calculate Best Price</p>
          </div>

          <SelectInput
            optionsArray={academicLevelOptions}
            defaultOption="-- Please Select Academic Level --"
          />
          <SelectInput
            optionsArray={domainOptions}
            defaultOption="-- Please Select Domain --"
          />
          <SelectInput
            optionsArray={desiredServiceOptions}
            defaultOption="-- Please Select Desired Service --"
          />
          <SelectInput
            optionsArray={wordsPagesOptions}
            defaultOption="-- Select No. of Words/Pages --"
          />
          <SelectInput
            optionsArray={toolOptions}
            defaultOption="-- Select Tool --"
          />

          {/* 6th Input */}
          <input type="text" placeholder="Enter your email" />

          {/* 7th Input */}
          <input type="text" placeholder="Enter your mobile number" />

          {/* 8th Input */}
          <div className="deadline-container">
            <ReactDatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Deadline: dd/mm/yyyy"
              dateFormat="dd/MM/yyyy"
              className="custom-datepicker"
            />
          </div>

          <div className="form-bottom">
            <button type="submit">
              Click To Calculate <FaCalculator style={{ paddingLeft: "5px" }} />
            </button>
            <p className="result-text">Result is all that Matters!</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CalculatePricing;
