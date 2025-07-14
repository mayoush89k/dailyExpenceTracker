import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import { useExpense } from "./context/ExpenseContext";
import ExpensesPage from "./components/ExpensePage/ExpensesPage";
import Header from "./components/Header/Header";
import NavMonths from "./components/NavMonths/NavMonths";

function App() {
  const {
    expenseList,
    currMonth,
    currYear,
    setCurrMonth,
    setCurrYear,
    increaseMonth,
    decreaseMonth,
    increaseYear,
    decreaseYear,
    setFirstMonth,
    setLastMonth,
    getFirstDate,
    getLastDate,
  } = useExpense();

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);

  const [firstDate, setFirstDate] = useState(getFirstDate().slice(0,7)
  );
  const [lastDate, setLastDate] = useState(getLastDate().slice(0,7)
  );

  const [currDate, setCurrDate] = useState(() => {
    const today = new Date();
    const offset = today.getTimezoneOffset();
    return new Date(today.getTime() - offset * 60 * 1000)
      .toISOString()
      .split("T")[0];
  });

  useEffect(() => {
    setFirstDate(
     getFirstDate().slice(0, 7)
    );
    setLastDate(
      getLastDate().slice(0, 7)
    );
  }, [expenseList]);

  useEffect(() => {
    if (currMonth == 0) {
      decreaseYear();
      setLastMonth(12);
    } else if (currMonth == 13) {
      increaseYear();
      setFirstMonth(1);
    }
  }, [currMonth, currYear]);

  useEffect(() => {
    if (currDate) {
      const date = new Date(currDate);
      setCurrMonth(date.getMonth() + 1);
      setCurrYear(date.getFullYear());
      console.log("Selected Date:", currDate);
    }
  }, [currDate]);

  return (
    <>
      <section className="body-container">
        <Menu />
        <sidebar className="body-sidebar">
          <Header />
          <section>
            <h2 className="today-title">
              {new Date(currYear, currMonth - 1).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>

            <input
              type="month"
              className="month-selector"
              min={firstDate}
              max={lastDate}
              value={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setCurrDate(e.target.value)}
            />
            <NavMonths setLeft={setLeft} setRight={setRight} />
            {left && (
              <ExpensesPage
                dir="left"
                currMonth={currMonth - 1}
                currYear={currYear}
              />
            )}
            {right && (
              <ExpensesPage
                dir="right"
                currMonth={currMonth}
                currYear={currYear}
              />
            )}
          </section>
        </sidebar>
      </section>
    </>
  );
}

export default App;
