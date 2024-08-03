import React from "react";
import "../assets/css/ExpenceDate.css";

function ExpenceDate({date}:{date:Date}) {
  return <div className="expense-date">
  <div className="expense-date__month">{date.toLocaleDateString('en-US', { month: "long" })}</div>
  <div className="expense-date__day">
    { date.getDate()}
  </div>
  <div className="expense-date__year">
    {date.getFullYear()}
  </div>
  </div>
}

export default ExpenceDate;