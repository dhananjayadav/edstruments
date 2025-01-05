import React from "react";
import "./header.css";

export const Header = ({ heading }) => {
  return (
    <div className="header-container">
      <div className="header-title-container">
        <img src="/images/back.svg" alt="img" />
        <span className="header-title">{heading}</span>
      </div>
    </div>
  );
};
