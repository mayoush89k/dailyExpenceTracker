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
    increaseYear,
    decreaseYear,
  } = useExpense();

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);

  useEffect(() => {
    if (currMonth == 0) {
      decreaseYear();
      setCurrMonth(12);
    } else if (currMonth == 13) {
      increaseYear();
      setCurrMonth(1);
    }
  }, [currMonth, currYear]);

  return (
    <>
      <section className="body-container">
        <Menu />
        <aside className="body-sidebar">
          <Header />
          <section>
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
        </aside>
      </section>
    </>
  );
}

export default App;
