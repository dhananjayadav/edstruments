import React from "react";
import "./select.css";

export const Select = ({
  placeholder,
  options = [],
  onSelect,
  label,
  required,
}) => {
  return (
    <div className={`${label && "input-main-container-label"}`}>
      {label && (
        <div className="input-label-container">
          <span className="input-label-text">
            {label} {required && <sup className="input-required">*</sup>}
          </span>
        </div>
      )}
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
    </div>
  );
};
