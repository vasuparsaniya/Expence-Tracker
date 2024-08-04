import React from "react";

function ExpenseForm() {

  const titleChangeHandler = () => {
    
  }

  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" onChange={} />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" onChange={} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;