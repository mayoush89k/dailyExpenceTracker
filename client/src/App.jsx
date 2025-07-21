import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import { useExpense } from "./context/ExpenseContext";
import ExpensesPage from "./components/ExpensePage/ExpensesPage";
import Header from "./components/Header/Header";
import NavMonths from "./components/NavMonths/NavMonths";

function App() {
  const { currMonth, currYear, first , last , current , prevMonth , nextMonth} =
    useExpense();

  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture(touchStartX, touchEndX);
  };
  const handleGesture = (touchStartX, touchEndX) => {
    if (last >= current && touchEndX < touchStartX - 50) {
      // Swipe Left → Next Month
      nextMonth(setLeft, setRight);
    }
    if (first < current && touchEndX > touchStartX + 50) {
      // Swipe Right → Previous Month
      prevMonth(setLeft, setRight);
    }
  };

  return (
    <>
      <section className="body-container">
        <Menu />
        <aside className="body-sidebar">
          <Header />
          <section onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <NavMonths setLeft={setLeft} setRight={setRight} 
              handleGesture ={handleGesture}
            />
            {left && (
              <ExpensesPage
                dir="left"
                currMonth={currMonth}
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
