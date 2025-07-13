import React, { useEffect, useState } from "react";
import "./ExpensesPage.css";
import { FaCreditCard } from "react-icons/fa";
import { useExpense } from "../../context/ExpenseContext";

export default function ExpensesPage({ dir, currMonth, currYear }) {
  const visa = [1111, 1112, 1113];
  const [expensesOfThisMonth, setExpensesOfThisMonth] = useState([]);
  const { getExpensesOfThisMonth } = useExpense();

  useEffect(() => {
    console.log("useEffect");
console.log(currMonth);
console.log(currYear);

    async function fetchData() {
      const dataList = await getExpensesOfThisMonth(currMonth, currYear);
      setExpensesOfThisMonth(dataList);
    }
    fetchData();
  }, [currMonth, currYear]);

  useEffect(() => {
    console.log(expensesOfThisMonth);
  }, [expensesOfThisMonth]);

  return (
    <section id={dir}>
      <section className="container-page">
        {visa.map((v, key) => (
          <section className="visaListExpense" key={`Visa${key}`}>
            <h3>
              <FaCreditCard /> Visa {v}
            </h3>
            {expensesOfThisMonth.map((item, key) => {
              return (
                item.visaNumber == v && (
                  <section key={`expense${key}`}>
                    {item.shopName}: {item.amount}
                  </section>
                )
              );
            })}
          </section>
        ))}
      </section>
    </section>
  );
}
