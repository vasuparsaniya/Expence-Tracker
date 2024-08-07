import React from "react";
import ExpenceItem from "./ExpenceItem";
import { ExpencesArray } from "../../types/App";
import "../../assets/css/ExpenseList.css";

function ExpenceList({ expenses }:{expenses:ExpencesArray}) {
  if (expenses.length == 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
    {expenses.map((item, index) => {
      return <ExpenceItem key={item.id} id={item.id} title={item.title} amount={item.amount} date={item.date} />
    })}
    </ul>
  )
}

export default ExpenceList;