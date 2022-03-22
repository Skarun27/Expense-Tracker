import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { 
      title: "Car Insurance", 
      amount: 123.0,
      date: new Date(2022, 8, 14) 
    },
    { 
      title: "Health Insurance", 
      amount: 13.2, 
      date: new Date( 2022, 8, 14) 
    },
    { 
      title: "Phone Insurance", 
      amount: 23.2, 
      date: new Date(2022, 8, 14) 
    },
    { 
      title: "Toilet Paper", 
      amount: 12, 
      date: new Date(2022, 8, 14) 
    },
  ];

  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
