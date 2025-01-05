import React from "react";
import "./select.css";

export const Select = ({ placeholder, options = [], onSelect }) => {
  return (
    <select
      placeholder={placeholder}
      className="select-main-container"
      onSelect={onSelect}
    >
      {options.map(({ label, value }) => (
        <option key={value} value={label}>
          {label}
        </option>
      ))}
    </select>
  );
};
