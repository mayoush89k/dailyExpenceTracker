import { useEffect, useState } from "react";
import "./ExpensesPage.css";
import { useExpense } from "../../context/ExpenseContext";

export default function ExpensesPage({ dir, currMonth, currYear }) {
  const [expensesOfThisMonth, setExpensesOfThisMonth] = useState([]);
  const {
    getExpensesOfThisMonth,
    getSumCurrMonthExpenses,
    totalOfThisMonth,
    getListOfVisa,
    getListOfPaymentMethods,
  } = useExpense();
  const visa = getListOfVisa();
  const paymentMethods = getListOfPaymentMethods();

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

  const filterExpenses = (expList, filteredBy, result) => {
    return expList.filter((item) => item[filteredBy] === result);
  };

  return (
    <section id={dir}>
      {paymentMethods.map((p) =>
        p == "Visa" ? (
          visa.map(
            (v, i) =>
              v && (
                <section className="visaListExpense" key={`Visa${i}`}>
                  <h3 className="visaTitle">💳 Visa {v}</h3>
                  {filterExpenses(expensesOfThisMonth, "visaNumber", v).map(
                    (item, j) => (
                      <section className="expense" key={`expense${j}`}>
                        {item.shopName}: ₪{item.amount}
                      </section>
                    )
                  )}
                </section>
              )
          )
        ) : (
          <section>
            {expensesOfThisMonth
              .filter((item) => item.paymentMethod == p)
              .map((item, j) => (
                <section className="visaListExpense">
                  <h3 className="visaTitle">{p}</h3>
                  <section className="expense" key={`expense${j}`}>
                    {item.shopName}: ₪{item.amount}
                  </section>
                </section>
              ))}
          </section>
        )
      )}
      <section className="total-expense">
        🧾 <strong>Total:</strong> ₪{totalOfThisMonth.toFixed(2)}
      </section>
    </section>
  );
}
