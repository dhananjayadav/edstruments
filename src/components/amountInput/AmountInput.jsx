import React from "react";
import "./amountInput.css";

export const AmountInput = ({ value, onChange }) => {
  return (
    <div className="amount-input-container">
      <div className="amount-input-main-container">
        <div className="amount-input-currency-container">
          <img
            className="amount-input-currency-img"
            src="/images/dollar.svg"
            alt="dollar"
          />
        </div>
        <input
          className="amount-main-input"
          onChange={onChange}
          value={value}
          min="0"
          type="number"
        />
      </div>
      <span className="amount-input-currency">USD</span>
    </div>
  );
};
