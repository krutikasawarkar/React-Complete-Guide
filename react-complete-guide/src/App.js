import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

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
      <NewExpense />
     <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
