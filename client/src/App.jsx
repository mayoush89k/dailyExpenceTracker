import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import { useExpense } from "./context/ExpenseContext";
import ExpensesPage from "./components/ExpensePage/ExpensesPage";
import Header from "./components/Header/Header";
import NavMonths from "./components/NavMonths/NavMonths";

function App() {
  const {
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
  } = useExpense();

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);

  const [currDate, setCurrDate] = useState();

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
    setCurrMonth(new Date(currDate).getMonth() + 1);
    setCurrYear(new Date(currDate).getFullYear());
    console.log();
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

            <input type="date" onChange={(e) => setCurrDate(e.target.value)} />
            <section>{currDate} M: {new Date(currDate).getMonth() + 1} / Y: {new Date(currDate).getFullYear()}</section>
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
