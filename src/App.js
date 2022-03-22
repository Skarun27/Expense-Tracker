import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react';

const dummyExpenses = [
  { 
    id: "e1",
    title: "Car Insurance", 
    amount: 123.0,
    date: new Date(2022, 8, 14) 
  },
  { 
    id: "e2",
    title: "Health Insurance", 
    amount: 13.2, 
    date: new Date( 2022, 8, 14) 
  },
  { 
    id: "e3",
    title: "Phone Insurance", 
    amount: 23.2, 
    date: new Date(2022, 8, 14) 
  },
  { 
    id: "e4",
    title: "Toilet Paper", 
    amount: 12, 
    date: new Date(2022, 8, 14) 
  },
];

const App = () => {
  
  const [expenses, setExpenses] = useState(dummyExpenses);

  const addNewExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
