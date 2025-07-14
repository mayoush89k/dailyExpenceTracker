import { createContext, useContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();
export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  // Today
  const today = new Date();
  const [currMonth, setCurrMonth] = useState(
    new Date(today.toLocaleDateString()).getMonth() + 1
  );

  const [currYear, setCurrYear] = useState(
    new Date(today.toLocaleDateString()).getFullYear()
  );
  const [totalOfThisMonth, setTotalOfThisMonth] = useState(0);
  const [expenseList, setExpenseList] = useState([
    {
      shopName: "Delek",
      amount: 100,
      date: "2025-01-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Yellow",
      amount: 300,
      date: "2025-01-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-10-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-10-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-07-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-10-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-10-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-04-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-01-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-03-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-02-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-03-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-02-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-07-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-06-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2025-09-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Delek",
      amount: 100,
      date: "2025-01-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Yellow",
      amount: 300,
      date: "2025-01-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2021-02-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2021-08-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2021-03-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2021-012-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2021-08-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2021-05-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2021-03-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2023-03-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2023-02-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2023-03-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2023-02-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2023-07-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2023-06-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2023-09-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Delek",
      amount: 100,
      date: "2024-01-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Yellow",
      amount: 300,
      date: "2024-01-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2024-10-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2024-10-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2024-07-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2024-10-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2024-10-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2024-04-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2024-01-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2022-03-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2022-02-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2022-03-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2022-02-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2022-07-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2022-06-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: "2022-09-12T00:00:00",
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
  ]);

  const getAll = async () => {
    return expenseList;
  };

  const getExpensesOfThisMonth = async (currMonth, currYear) => {
    return expenseList
      .filter((item) => new Date(item.date).getFullYear() == currYear)
      .filter((item) => new Date(item.date).getMonth() + 1 == currMonth);
  };

  const getExpensesOfVisa = async (visa, currMonth, currYear) => {
    return (await getExpensesOfThisMonth(currMonth, currYear)).filter(
      (item) => item.visa == visa
    );
  };

  const filterMonth = async (currMonth) => {
    return await getAll.filter(
      (item) => new Date(item.date).getMonth() + 1 == currMonth
    );
  };
  const filterYear = async (currYear) => {
    return await getAll.filter(
      (item) => new Date(item.date).getFullYear() == currYear
    );
  };

  const setFirstMonth = () => {
    setCurrMonth(1);
  };
  const setLastMonth = () => {
    setCurrMonth(12);
  };
  const increaseMonth = () => {
    setCurrMonth((currMonth) => currMonth + 1);
  };
  const decreaseMonth = () => {
    setCurrMonth((currMonth) => currMonth - 1);
  };

  const increaseYear = () => {
    setCurrYear((currYear) => currYear + 1);
  };
  const decreaseYear = () => {
    setCurrYear((currYear) => currYear - 1);
  };

  const getSumCurrMonthExpenses = async (currMonth, currYear) => {
    const expenseList = await getExpensesOfThisMonth(currMonth, currYear);
    console.log(expenseList);

    setTotalOfThisMonth(
      expenseList.reduce((acc, cur) => {
        return cur.amount + acc;
      }, 0)
    );
  };

  const getFirstDate = () => expenseList.sort((a, b) => new Date(a.date) - new Date(b.date))[0].date;
  const getLastDate = () => expenseList.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date;
  
  return (
    <ExpenseContext.Provider
      value={{
        expenseList,
        filterMonth,
        filterYear,
        getExpensesOfThisMonth,
        getExpensesOfVisa,
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
        getSumCurrMonthExpenses,
        totalOfThisMonth,
        getFirstDate,
        getLastDate
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
