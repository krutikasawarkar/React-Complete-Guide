import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem.js';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 5200,
      date: new Date(2020, 8, 19),
    },
  ];
  return (
    <div>
      <h2>Lets get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}></ExpenseItem>
    </div>
  );
}

export default App;
