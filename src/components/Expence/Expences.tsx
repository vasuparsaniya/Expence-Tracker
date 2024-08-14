import React, { useState } from "react";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";
import "../../assets/css/Expenses.css";
import { ExpencesArray } from "../../types/App";
import ExpenceFilter from "./ExpenceFilter";
import ExpenceList from "./ExpenceList";
import ExpenseChart from "./ExpenseChart";

function Expences({ expenses }: { expenses: ExpencesArray }) {
  const [filteredYear, setFilteredyear] = useState<string>("2022")
  
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredyear(selectedYear);
  }

  const filterExpense:ExpencesArray = expenses.filter((expence) => {
    return expence.date.getFullYear().toString() === filteredYear;
  })

  return <Card className="expenses">
    <ExpenceFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
    <ExpenseChart expenses={filterExpense} />
    <ExpenceList expenses={filterExpense} />
    </Card>
}

export default Expences;