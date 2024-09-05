"use client";
import React, { useState } from "react";
import "./SelectionScreen.css"; // Custom CSS for styling

const SelectionScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleMouseEnter = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <div className="selection-container">
      <div
        className={`selection-option ${selectedOption === "startups" ? "active" : ""}`}
        onMouseEnter={() => handleMouseEnter("startups")}
      >
        <div className="overlay"></div>
        <div className="text">For Startups</div>
      </div>

      <div className="divider"></div>

      <div
        className={`selection-option ${selectedOption === "investors" ? "active" : ""}`}
        onMouseEnter={() => handleMouseEnter("investors")}
      >
        <div className="overlay"></div>
        <div className="text">For Investors</div>
      </div>

      <div className="divider"></div>

      <div
        className={`selection-option ${selectedOption === "vcs" ? "active" : ""}`}
        onMouseEnter={() => handleMouseEnter("vcs")}
      >
        <div className="overlay"></div>
        <div className="text">For VCs</div>
      </div>
    </div>
  );
};

export default SelectionScreen;
