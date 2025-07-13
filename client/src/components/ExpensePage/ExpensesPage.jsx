import React, { useEffect, useState } from "react";
import "./ExpensesPage.css";
import { FaCreditCard } from "react-icons/fa";
import { useExpense } from "../../context/ExpenseContext";

export default function ExpensesPage({ dir, currMonth, currYear }) {
  const visa = [1111, 1112, 1113];
  const [expensesOfThisMonth, setExpensesOfThisMonth] = useState([]);
  const { getExpensesOfThisMonth, getSumCurrMonthExpenses, totalOfThisMonth } =
    useExpense();

  useEffect(() => {
    async function fetchData() {
      const dataList = await getExpensesOfThisMonth(currMonth, currYear);
      setExpensesOfThisMonth(dataList);
      await getSumCurrMonthExpenses(currMonth, currYear);
    }
    fetchData();
  }, [currMonth, currYear]);

  useEffect(() => {
    console.log(expensesOfThisMonth);
  }, [expensesOfThisMonth]);

  return (
    <section id={dir}>
      {visa.map((v, i) => (
        <section className="visaListExpense" key={`Visa${i}`}>
          <h3 className="visaTitle">💳 Visa {v}</h3>
          {expensesOfThisMonth
            .filter((item) => item.visaNumber === v)
            .map((item, j) => (
              <section key={`expense${j}`}>
                <section>
                  {item.paymentMethod} - {item.visaNumber}
                </section>
                <section>
                  {item.shopName}: ₪{item.amount}
                </section>
              </section>
            ))}
        </section>
      ))}

      <section className="total-expense">
        🧾 <strong>Total:</strong> ₪{totalOfThisMonth.toFixed(2)}
      </section>
    </section>
  );
}
