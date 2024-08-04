import React from "react";
import "../assets/css/ExpenceItem.css";
import { ExpenceItemProps } from "../types/components/ExpenceItem";
import ExpenceDate from "./ExpenceDate";
import Card from "./Card";

function ExpenceItem({id,title,date,amount}:ExpenceItemProps) {
  return <Card className="expense-item">
    <ExpenceDate date={ date} />
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">{amount}</div>
   </div>
    </Card>
}

export default ExpenceItem