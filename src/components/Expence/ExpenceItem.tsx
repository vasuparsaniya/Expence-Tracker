import React, { useState } from "react";
import "../../assets/css/ExpenceItem.css";
import { ExpenceItemProps } from "../../types/components/ExpenceItem";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

function ExpenceItem({ id, title, date, amount }: ExpenceItemProps) {
  const [newWitle,SetNewTitle] = useState(title)
  const clickHandler = () => {
    SetNewTitle("New Title")
  }

  return <Card className="expense-item">
    <ExpenceDate date={ date} />
    <div className="expense-item__description">
      <h2>{newWitle}</h2>
      <div className="expense-item__price">{amount}</div>
    </div>
    <button onClick={clickHandler}>Change Title</button>
    </Card>
}

export default ExpenceItem