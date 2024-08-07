import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ExpenceItem from './components/Expence/ExpenceItem';
import Expences from './components/Expence/Expences';
import { ExpencesArray, ExpencesObject } from './types/App';
import NewExpense from './components/NewExpense/NewExpense';

const dummy:ExpencesArray = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses,setExpenese] = useState<ExpencesArray>(dummy)
  
  const addExpenceHandler = (expense:ExpencesObject) => {
    setExpenese((prev) => {
      return [expense,...prev]
    })
  }

  return (
    <div>
      <NewExpense onAddExpence={addExpenceHandler} />
      <Expences expenses={expenses} />
    </div>
  );
}

export default App;
