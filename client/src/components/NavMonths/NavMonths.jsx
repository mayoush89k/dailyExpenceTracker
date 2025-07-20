import React, { useEffect, useState } from "react";
import { useExpense } from "../../context/ExpenseContext";
import "./NavMonths.css";

export default function NavMonths({ setLeft, setRight }) {
  // Today
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // 1–12
  const todayYear = today.getFullYear();

  const {
    expenseList,
    increaseMonth,
    decreaseMonth,
    currMonth,
    currYear,
    setCurrMonth,
    setCurrYear,
    setFirstMonth,
    setLastMonth,
    getFirstDate,
    getLastDate,
  } = useExpense();

  const [firstDate, setFirstDate] = useState(getFirstDate().slice(0, 7));
  const [lastDate, setLastDate] = useState(getLastDate().slice(0, 7));

  const [currDate, setCurrDate] = useState(() => {
    const today = new Date();
    const offset = today.getTimezoneOffset();
    return new Date(today.getTime() - offset * 60 * 1000)
      .toISOString()
      .split("T")[0];
  });

  useEffect(() => {
    setFirstDate(getFirstDate().slice(0, 7));
    setLastDate(getLastDate().slice(0, 7));
  }, [expenseList]);

  useEffect(() => {
    if (currDate) {
      const date = new Date(currDate);
      setCurrMonth(date.getMonth() + 1);
      setCurrYear(date.getFullYear());
      console.log("Selected Date:", currDate);
    }
  }, [currDate]);

  const prevMonth = () => {
    decreaseMonth();
    setLeft(false);
    setRight(false);
    setTimeout(() => {
      setLeft(true);
    }, 200);
  };

  const nextMonth = () => {
    increaseMonth();
    setLeft(false);
    setRight(false);
    setTimeout(() => {
      setRight(true);
    }, 200);
  };

  return (
    <div className="nav-container">
      <input
        type="month"
        className="month-selector"
        min={firstDate}
        max={lastDate}
        value={new Date().toISOString().slice(0, 10)}
        onChange={(e) => setCurrDate(e.target.value)}
      />
      <div className="month-nav">
        <button
          onClick={prevMonth}
          disabled={currYear <= 2000 && currMonth === 1}
        >
          ⬅️ Previous
        </button>
        <h2 className="today-title">
          {new Date(currYear, currMonth - 1).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button
          onClick={nextMonth}
          disabled={
            currYear > todayYear ||
            (currYear === todayYear && currMonth >= todayMonth)
          }
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
