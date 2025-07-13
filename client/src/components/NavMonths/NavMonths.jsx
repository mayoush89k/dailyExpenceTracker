import React from "react";
import { useExpense } from "../../context/ExpenseContext";
import "./NavMonths.css";

export default function NavMonths({ setLeft, setRight }) {
  // Today
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // 1–12
  const todayYear = today.getFullYear();

  const { increaseMonth, decreaseMonth, currMonth, currYear } = useExpense();

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
    <div className="month-nav">
      <button
        onClick={prevMonth}
        disabled={currYear <= 2000 && currMonth === 1}
      >
        ⬅️ Previous
      </button>
      <button
        onClick={nextMonth}
        disabled={
          currYear > todayYear ||
          (currYear === todayYear && currMonth >= todayMonth)
        }
      >
        Next ➡️
      </button>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
  );
}
