import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import { useExpense } from "./context/ExpenseContext";
import ExpensesPage from "./components/ExpensePage/ExpensesPage";

function App() {
  // today
  const today = new Date();
  const todayMonth = today.getMonth() + 1; // 1–12
  const todayYear = today.getFullYear();

  const [currMonth, setCurrMonth] = useState(
    new Date(today.toLocaleDateString()).getMonth() + 1
  );
  const [currYear, setCurrYear] = useState(
    new Date(today.toLocaleDateString()).getFullYear()
  );

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  useEffect(() => {
    if (currMonth == 0) {
      setCurrYear(currYear - 1);
      setCurrMonth(12);
    } else if (currMonth == 13) {
      setCurrYear(currYear + 1);
      setCurrMonth(1);
    }

  },[currMonth, currYear])
  return (
    <>
      <Menu />
      <section>
        <h1>
          {currYear} - {currMonth}
        </h1>

        <button
          id="subMonth"
          onClick={() => {
            setCurrMonth((currMonth) => currMonth - 1);
            setLeft(false);
            setRight(false);
            setTimeout(() => {
              setLeft(true);
            }, 200);
          }}
          disabled={currYear <= 2000 && currMonth === 1}
        >
          -
        </button>
        <button
          id="addMonth"
          onClick={() => {
            setCurrMonth((currMonth) => currMonth + 1);
            setLeft(false);
            setRight(false);
            setTimeout(() => {
              setRight(true);
            }, 200);
          }}
          disabled={
            currYear > todayYear ||
            (currYear === todayYear && currMonth >= todayMonth)
          }
        >
          +
        </button>
        {left && <ExpensesPage dir="left" currMonth={currMonth} currYear={currYear} />}
        {right && <ExpensesPage dir="right" currMonth={currMonth} currYear={currYear}/>}
      </section>
    </>
  );
}

export default App;
