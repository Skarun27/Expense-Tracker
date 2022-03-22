import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectYearHandler = (year) => {
    setSelectedYear(year);
  };

  const expenseItems = props.items.filter(
    (expense) => expense.date.getFullYear() == selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={selectedYear}
          onYearChange={selectYearHandler}
        />
        <ExpensesChart expenses={expenseItems}/>
        <ExpensesList expenseItems={expenseItems} />
      </Card>
    </div>
  );
};

export default Expenses;
