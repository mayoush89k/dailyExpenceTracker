import { createContext, useContext, useEffect, useState } from "react";

export const ExpenseContext = createContext();
export const useExpense = () => useContext(ExpenseContext);

export const ExpenseProvider = ({ children }) => {
  const [expenseList, setExpenseList] = useState([
    {
      shopName: "Delek",
      amount: 100,
      date: new Date("Jan 11 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Yellow",
      amount: 300,
      date: new Date("Jan 01 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jul 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Apr 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jan 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Mar 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Feb 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Mar 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Feb 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jul 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jun 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Sep 12 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Delek",
      amount: 100,
      date: new Date("Jan 11 2025"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Yellow",
      amount: 300,
      date: new Date("Jan 01 2025"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2021"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2021"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jul 12 2021"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2021"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2021"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Apr 12 2021"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jan 12 2021"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Mar 12 2023"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Feb 12 2023"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Mar 12 2023"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Feb 12 2023"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jul 12 2023"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jun 12 2023"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Sep 12 2023"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Delek",
      amount: 100,
      date: new Date("Jan 11 2024"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Yellow",
      amount: 300,
      date: new Date("Jan 01 2024"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2024"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2024"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jul 12 2024"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2024"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Oct 12 2024"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Apr 12 2024"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jan 12 2024"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Mar 12 2022"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Feb 12 2022"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Mar 12 2022"),
      paymentMethod: "Visa",
      visaNumber: 1111,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Feb 12 2022"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jul 12 2022"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Jun 12 2022"),
      paymentMethod: "Visa",
      visaNumber: 1112,
    },
    {
      shopName: "Shufersal",
      amount: 350,
      date: new Date("Sep 12 2022"),
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

  const getExpensesOfVisa = async (visa , currMonth , currYear) => {
    return (await getExpensesOfThisMonth(currMonth , currYear)).filter(item => item.visa == visa)
  }

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

  return (
    <ExpenseContext.Provider
      value={{ expenseList, filterMonth, filterYear, getExpensesOfThisMonth , getExpensesOfVisa}}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
