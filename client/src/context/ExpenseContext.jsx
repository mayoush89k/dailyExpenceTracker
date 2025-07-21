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
      shopName: "ShuferSal",
      amount: 400,
      date: "2025-01-12T00:00:00",
      paymentMethod: "Cash",
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

  useEffect(() => {
    async function fetchData() {
      setExpenseList(await getAll());
    }
    fetchData();
    console.log(expenseList);
    console.log(getListOfPaymentMethods());
  }, []);

  // get all items
  const getAll = async () => {
    return expenseList;
  };

  // get the expenses of this month
  const getExpensesOfThisMonth = async (currMonth, currYear) => {
    return expenseList
      .filter((item) => new Date(item.date).getFullYear() == currYear)
      .filter((item) => new Date(item.date).getMonth() + 1 == currMonth);
  };

  // get the expenses of this month that used by special visa number
  const getExpensesOfVisa = async (visa, currMonth, currYear) => {
    return (await getExpensesOfThisMonth(currMonth, currYear)).filter(
      (item) => item.visa == visa
    );
  };

  // get the first date of the expenses list and save its month
  const setFirstMonth = () => {
    setCurrMonth(1);
  };

  // get the last date of the expenses list and save its month
  const setLastMonth = () => {
    setCurrMonth(12);
  };

  // move forward of month page
  const increaseMonth = () => {
    setCurrMonth((currMonth) => currMonth + 1);
  };

  // move backward of month page
  const decreaseMonth = () => {
    setCurrMonth((currMonth) => currMonth - 1);
  };

  // move to next of current year
  const increaseYear = () => {
    setCurrYear((currYear) => currYear + 1);
  };

  // move back to previous of current year
  const decreaseYear = () => {
    setCurrYear((currYear) => currYear - 1);
  };

  // count the sum oof a;; expenses that have been spent in this month
  const getSumCurrMonthExpenses = async (currMonth, currYear) => {
    const expenseList = await getExpensesOfThisMonth(currMonth, currYear);
    setTotalOfThisMonth(
      expenseList.reduce((acc, cur) => {
        return cur.amount + acc;
      }, 0)
    );
  };

  // get the first date of the expenses list
  const getFirstDate = () =>
    expenseList.sort((a, b) => new Date(a.date) - new Date(b.date))[0].date;
  const getLastDate = () =>
    expenseList.sort((a, b) => new Date(b.date) - new Date(a.date))[0].date;

  // get payment methods of this month

  // get list of User's visa Numbers
  const getListOfVisa = () => {
    return expenseList.reduce((acc, cur) => {
      if (!acc.includes(cur.visaNumber)) {
        acc.push(cur.visaNumber);
      }
      return acc;
    }, []);
  };

  // get list of User's payment Methods
  const getListOfPaymentMethods = () => {
    return expenseList.reduce((acc, cur) => {
      if (!acc.includes(cur.paymentMethod)) {
        acc.push(cur.paymentMethod);
      }
      return acc;
    }, []);
  };
  
  // get first and last data dates
  const lastMonth = getLastDate().slice(5, 7);
  const lastYear = getLastDate().slice(0, 4);
  const firstMonth = getFirstDate().slice(5, 7);
  const firstYear = getFirstDate().slice(0, 4);

  const current = currYear * 100 + currMonth;
  const first = Number(firstYear + firstMonth + "");
  const last = Number(lastYear + lastMonth + "");

  // move forward and backward
  const prevMonth = (setLeft, setRight) => {
    if (first < current) {
      decreaseMonth();
      setLeft(false);
      setRight(false);
      setTimeout(() => {
        setLeft(true);
      }, 200);
    }
  };

  const nextMonth = (setLeft, setRight) => {
    if (last > current) {
      increaseMonth();
      setLeft(false);
      setRight(false);
      setTimeout(() => {
        setRight(true);
      }, 200);
    }
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenseList,
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
        getLastDate,
        getListOfVisa,
        getListOfPaymentMethods,
        nextMonth,
        prevMonth,
        first,
        last,
        current
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
