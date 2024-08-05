import React from "react";
import "../../assets/css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { ExpencesObject } from "../../types/App";

function NewExpense({onAddExpence}:{onAddExpence:(expense:ExpencesObject)=>void}) {

  //--child to parent data pass using function parameter
  const saveExpenceDataHandler = (data:any) => {
    const expenceData:ExpencesObject = {
      ...data,
      id:Math.random().toString()
    }
    console.log("------expence data", expenceData)
    onAddExpence(expenceData)
  }

  return <div className="new-expense">
    <ExpenseForm onSaveExpenceData={saveExpenceDataHandler} />
  </div>
}

export default NewExpense