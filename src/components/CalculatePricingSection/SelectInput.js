// SelectInput.js

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./SelectInput.css"; // Import the CSS file for styling

const SelectInput = ({ optionsArray, defaultOption }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div className="select-container">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className={selectedOption === defaultOption ? "default-option" : ""}
      >
        {optionsArray.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption !== defaultOption && <FaCheck className="check-icon" />}
    </div>
  );
};

export default SelectInput;
