import React, { ChangeEvent, FormEvent, useState } from "react";
import "../../assets/css/ExpenseForm.css";

function ExpenseForm({onSaveExpenceData,onCancle}:{onSaveExpenceData:(data:any)=>void,onCancle:()=>void}) {
  // const [enteredTitle, setEnteredTitle] = useState<string>("");
  // const [enteredAmount, setEnteredAmount] = useState<string>("");
  // const [enteredDate, setEnteredDate] = useState<string>("");


  // const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEnteredTitle(event?.target.value)
  // }

  // const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEnteredAmount(event?.target.value)
  // }

  // const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEnteredDate(event?.target.value);
  // }

  //----one state instead of seperate
  const [userInput, setUserInput] = useState({ enteredTitle: "", enteredAmount: "", enteredDate: "" })
  
  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {return {...prev, enteredTitle: event.target.value
    }})
  }

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {return {...prev, enteredAmount: event.target.value
    }})
  }

  const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput((prev) => {return {...prev, enteredDate: event.target.value
    }})
  }

  const handleFormSubmit = (event:FormEvent<HTMLFormElement>)  => {
    event.preventDefault();  //----prevent to reload

    const expenceData = { title: userInput.enteredTitle, amount: userInput.enteredAmount, date: new Date(userInput.enteredDate) };
    console.log("-----Expence Data", expenceData);

    onSaveExpenceData(expenceData);
    //---clear input
    //---we use two way binding using valueattribute
    setUserInput((prev) => {
      return { enteredTitle: "", enteredAmount: "", enteredDate: "" }
    })
  }

  return <form onSubmit={handleFormSubmit}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" value={userInput.enteredAmount} onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" value={userInput.enteredDate} onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" onClick={onCancle}>Cancle</button>
      <button type="submit">Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;