import React, { useState } from "react";
import "../../assets/css/NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { ExpencesObject } from "../../types/App";

function NewExpense({ onAddExpence }: { onAddExpence: (expense: ExpencesObject) => void }) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  //--child to parent data pass using function parameter
  const saveExpenceDataHandler = (data:any) => {
    const expenceData:ExpencesObject = {
      ...data,
      id:Math.random().toString()
    }
    onAddExpence(expenceData)
    setIsEditing(false)
  }

  const startEditingHandler = () => {
    setIsEditing(true);
  }

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return <div className="new-expense">
    {!isEditing && (
      <button onClick={startEditingHandler}>Add New Expense</button>
    )}
    {
      isEditing && 
      <ExpenseForm onSaveExpenceData={saveExpenceDataHandler} onCancle={ stopEditingHandler} />
    }
  </div>
}

export default NewExpense