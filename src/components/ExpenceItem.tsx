import React from "react";
import "../assets/css/ExpenceItem.css";
import { ExpenceItemProps } from "../types/components/ExpenceItem";
import ExpenceDate from "./ExpenceDate";

function ExpenceItem({id,title,date,amount}:ExpenceItemProps) {
  return <div className="expense-item">
    <ExpenceDate date={ date} />
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">{amount}</div>
   </div>
  </div>
}

export default ExpenceItem