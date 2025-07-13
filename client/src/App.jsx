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
    increaseMonth,
    decreaseMonth,
    increaseYear,
    decreaseYear,
    setFirstMonth,
    setLastMonth,
  } = useExpense();

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  useEffect(() => {
    if (currMonth == 0) {
      decreaseYear();
      setLastMonth(12);
    } else if (currMonth == 13) {
      increaseMonth(currYear + 1);
      setFirstMonth(1);
    }
  }, [currMonth, currYear]);
  return (
    <>
      <Menu />
      <Header />
      <section>
        <h2 style={{ textAlign: "center", color: "#007c91" }}>
          {new Date(currYear, currMonth - 1).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>

        <NavMonths setLeft={setLeft} setRight={setRight} />
        {left && (
          <ExpensesPage dir="left" currMonth={currMonth} currYear={currYear} />
        )}
        {right && (
          <ExpensesPage dir="right" currMonth={currMonth} currYear={currYear} />
        )}
      </section>
    </>
  );
}

export default App;
