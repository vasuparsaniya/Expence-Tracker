import React from "react";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";
import "../../assets/css/Expenses.css";
import { ExpencesArray } from "../../types/App";

function Expences({expenses}:{expenses:ExpencesArray}) {
  return <Card className="expenses">
  {expenses.map((item, index) => {
        return <ExpenceItem id={item.id} title={item.title} amount={item.amount} date={item.date} />
      })}
    </Card>
}

export default Expences;