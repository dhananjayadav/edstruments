import React, { useRef } from "react";
import "./dateInput.css";

export const DateInput = ({ onChange, value }) => {
  const dateInputRef = useRef();

  function formatDateToMMDDYY(dateInput) {
    const date = new Date(dateInput);

    if (isNaN(date)) {
      return "Select Date";
    }

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${month}/${day}/${year}`;
  }

  const handleDateChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div
      className="date-input-container"
      onClick={() => {
        dateInputRef.current.showPicker();
      }}
    >
      <div className="date-input-main-container">
        <img
          className="date-input-cal-img"
          src="/images/calendar.svg"
          alt="calendar"
        />
        <span
          className={`date-input-text ${
            value ? "date-input-text-selected" : ""
          }`}
        >
          {formatDateToMMDDYY(value)}
        </span>
      </div>
      <img
        className="date-input-chevron-img"
        src="/images/chevron.svg"
        alt="chevron"
      />

      <input
        ref={dateInputRef}
        className="date-input"
        type="date"
        onChange={handleDateChange}
      />
    </div>
  );
};
