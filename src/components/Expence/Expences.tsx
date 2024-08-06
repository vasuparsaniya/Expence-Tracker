import React, { useState } from "react";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Card";
import "../../assets/css/Expenses.css";
import { ExpencesArray } from "../../types/App";
import ExpenceFilter from "./ExpenceFilter";

function Expences({ expenses }: { expenses: ExpencesArray }) {
  const [filteredYear, setFilteredyear] = useState<string>("2020")
  
  const filterChangeHandler = (selectedYear: string) => {
    setFilteredyear(selectedYear);
  }

  return <Card className="expenses">
    <ExpenceFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
  {expenses.map((item, index) => {
        return <ExpenceItem id={item.id} title={item.title} amount={item.amount} date={item.date} />
      })}
    </Card>
}

export default Expences;